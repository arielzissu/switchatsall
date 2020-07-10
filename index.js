let express = require("express");
let app = require("express")();
let server = require("http").Server(app);
let io = require("socket.io")(server);
let helmet = require("helmet");
let history = require("connect-history-api-fallback");

let port = process.env.PORT || 8989;

let randomOnline = Math.floor(Math.random() * (1350 - 1100 + 1)) + 1100;
setInterval(() => {
  randomOnline =  Math.floor(Math.random() * (1350 - 1100 + 1)) + 1100;
}, 10000);

app.use(helmet());
app.use(history());

app.use(express.static("public"));
app.use("/assets", express.static(__dirname + "/dist"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/status", (req, res) => {
  res.status(200).json({
    status: 200,
    services: {
      ws: 'active'
    }
  });
});

app.get("/online", (req, res) => {
  res.status(200).json({
    status: 200,
    online: randomOnline
  })
});

server.listen(port, () => {
  console.log("Running server on 127.0.0.1:" + port);
});

let queue = new Array();

let socketIdUserMap = new Map();
let userIdSocketMap = new Map();
let userIdRoomMap = new Map();

io.on("connection", (socket) => {
  socket.on("join", ({ nickname, id }) => {
    const user = {
      nickname,
      id,
      avatarUrl: `https://picsum.photos/seed/${id}/200`
    };

    socketIdUserMap.set(socket.id, user);
    userIdSocketMap.set(user.id, socket);

    socket.emit("joined", user);

    findPeer(socket);
  });

  socket.on("message", (payload) => {
    let user = socketIdUserMap.get(socket.id);
    let room = userIdRoomMap.get(user.id);

    if (room) {
      socket.broadcast.to(room).emit("message", payload);
    }
  });

  socket.on("isTyping", (payload) => {
    let user = socketIdUserMap.get(socket.id);
    let room = userIdRoomMap.get(user.id);

    if (room) {
      socket.broadcast.to(room).emit("typingStatus", payload);
    }
  });

  socket.on("leaveRoom", () => {
    let user = socketIdUserMap.get(socket.id);
    let room = userIdRoomMap.get(user.id);

    if (room) {
      let peerId = room.split("#");
      peerId = peerId[0] === socket.id ? peerId[1] : peerId[0];

      let peerSocket = userIdSocketMap.get(socketIdUserMap.get(peerId).id);

      io.sockets.in(room).emit("chatEnd");

      socket.leave(room);
      peerSocket.leave(room);

      console.log(`[ROOMS] Room ${room} was deleted`);
    } else {
      console.log("[ROOMS] Cant delete room");
    }
  });

  socket.on("disconnect", () => {
    if (socketIdUserMap.has(socket.id)) {
      let user = socketIdUserMap.get(socket.id);
      let room = userIdRoomMap.get(user.id);

      if (room) {
        io.sockets.in(room).emit("chatEnd");

        let peerId = room.split("#");
        peerId = peerId[0] === socket.id ? peerId[1] : peerId[0];

        try {
          let peerSocket = userIdSocketMap.get(socketIdUserMap.get(peerId).id);
          socket.leave(room);

          peerSocket.leave(room);

          //  Delete peerId and peerSocket
          userIdSocketMap.delete(peerId);
          socketIdUserMap.delete(peerSocket);
        } catch (err) {
          console.log(err);
        }
      } else {
        queue = queue.filter((queueItem) => {
          if (queueItem.id !== socket.id) {
            return queueItem;
          }
        });
        //  Delete userID and userSocket
        userIdSocketMap.delete(user.id);
        socketIdUserMap.delete(socket.id);
      }
    }
  });
});

findPeer = (socket) => {
  if (!queue.includes(socket)) {
    console.log("[QUEUE] Added user");
    queue.push(socket);
  }

  if (queue.length > 0) {
    const q = queue.filter((qItem) => {
      if (qItem.id !== socket.id) {
        return qItem;
      }
    });

    if (q.length > 0) {
      queue = q;
      let peer = queue.shift();
      let room = `${socket.id}#${peer.id}`;
      try {
        userIdRoomMap.set(socketIdUserMap.get(peer.id).id, room);
        userIdRoomMap.set(socketIdUserMap.get(socket.id).id, room);

        peer.join(room);
        socket.join(room);

        peer.emit("chatStart", {
          user: socketIdUserMap.get(socket.id),
          room,
        });

        socket.emit("chatStart", {
          user: socketIdUserMap.get(peer.id),
          room,
        });
      } catch (err) {
        console.log(err);
      }
    }
  }

  console.log(`[QUEUE] Length: ${queue.length}`);
};
