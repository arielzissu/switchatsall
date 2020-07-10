import React from 'react';
import { Redirect } from 'react-router-dom';
import socketIOClient from 'socket.io-client';
import { connect } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { connectionUpdated } from '../../store/socket/actions';
import {
  addToQueue,
  removeFromQueue,
  setUserId
} from '../../store/user/actions';
import {
  setPeer,
  clearChat,
  addMessage
} from '../../store/chat/actions';
import ChatBox from "./ChatBox";
import Message from "./Message";


class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.socket = null;

    this.state = {
      toAds: false,
      peerTyping: false,
    }

    this.messageListEnd = React.createRef();
  }

  componentDidMount() {
    const username = this.props.username;
    const user = {
      name: username,
      id: uuidv4()
    };

    this.socket = socketIOClient(window.location.origin.replace(/^http/, 'ws'));

    this.socket.on('connect', () => {
      this.props.connectionUpdated(true);

      this.socket.emit('join', user);

      this.props.setUserId(user.id)
      this.props.addToQueue();
    });

    this.socket.on('chatStart', payload => {
      this.props.removeFromQueue();
      this.props.setPeer(payload);
    });

    this.socket.on('chatEnd', () => {
      this.props.clearChat();
      this.props.addToQueue();

      this.setState({
        toAds: true
      });
    });

    this.socket.on('message', payload => {
      this.props.addMessage(payload);
      this.scrollChatDown();
    });

    this.socket.on('typingStatus', payload => {
      this.setState({
        peerTyping: payload.isTyping
      });
    });
  }

  componentWillUnmount() {
    this.socket.close();
  }

  sendMessage = (message, e) => {
    const newMessage = {
      uid: this.props.userId,
      message
    };

    this.props.addMessage(newMessage);
    this.socket.emit('message', newMessage);

    this.scrollChatDown();
  };

  sendTypingStatus = (status) => {
    this.socket.emit('isTyping', {
      isTyping: status
    });
  };

  handleLeave = e => {
    this.socket.emit('leaveRoom');
  };

  scrollChatDown = () => {
    if (this.messageListEnd && this.messageListEnd.current) {
      this.messageListEnd.current.scrollIntoView();
      setTimeout(() => {
        this.messageListEnd.current.scrollTo({
          top: this.messageListEnd.current.scrollHeight,
          behavior: 'smooth'
        });
      }, 100);
    }
  };

  imgOnLoad = () => {
    this.scrollChatDown();
  };

  render() {
    if (!this.props.authenticated || !this.props.isReadRules) {
      return (
        <Redirect to="/" />
      );
    }

    if (this.state.toAds) {
      return (
        <Redirect to="/ads" />
      );
    }

    return (
      <div className="chat window-container">
        <div className="window-background"></div>
        <div className="window-card">
          <div className="messenger">
            <header className="messenger-header">
              <div className="messenger-header-container">
                {this.props.inQueue ? (
                  <div className="messenger-header-status">
                    <p className="messenger-header-status-message">חיפוש בן שיח</p>
                  </div>
                ) : (
                  <>
                    <div className="messenger-header-subject">
                      <div className="messenger-header-subject-avatar">
                        <img src="" alt="" />
                      </div>
                      <div className="messenger-header-subject-info">
                        <h4 className="messenger-header-subject-name">{this.props.username}</h4>
                        <p className="messenger-header-subject-status">{'מחובר/ת'}</p>
                      </div>
                    </div>

                    <div className="messenger-header-action">
                      <button onClick={this.handleLeave}>
                        Switch
                      </button>
                    </div>

                    <div className="messenger-header-companion">
                      <div className="messenger-header-companion-info">
                        <h4 className="messenger-header-companion-name">{this.props.peer ? this.props.peer.user.name : ''}</h4>
                        <p className="messenger-header-companion-status">
                          {this.state.peerTyping ? 'מקליד/ה' : 'מחובר/ת'}
                        </p>
                      </div>
                      <div className="messenger-header-companion-avatar">
                        <img src="" alt="" />
                      </div>
                    </div>
                  </>
                )}
              </div>
            </header>
            <div className="messenger-content">
              <div className="messenger-content-container">
                <div className="messenger-content-status">
                  <p className="messenger-content-status-message">
                    {this.props.inQueue ? (
                      'חכה עד שנמצא בן שיח ראוי עבורך :)'
                    ) : (
                      `אתה מצ’וטט כרגע עם “${this.props.peer ? this.props.peer.user.name : ''}” בצאט מאובטח`
                    )}
                  </p>
                </div>
                <div className="messenger-content-list" ref={this.messageListEnd}>
                  {this.props.messages.length !== 0 && (
                    this.props.messages.map((message, i) => {
                      return <Message key={i} message={message} ownerUid={this.props.userId} imgOnLoad={this.imgOnLoad} />;
                    })
                  )}
                  <div ></div>
                </div>
                <ChatBox
                  sendMessage={this.sendMessage}
                  sendTypingStatus={this.sendTypingStatus}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  authenticated: state.user.authenticated,
  isReadRules: state.user.read_rules,
  inQueue: state.user.in_queue,
  username: state.user.username,
  userId: state.user.id,
  connected: state.socket.connected,
  peer: state.chat.peer,
  messages: state.chat.messages
});

const mapDispatchToProps = dispatch => ({
  connectionUpdated: isConnected => dispatch(connectionUpdated(isConnected)),
  addToQueue: () => dispatch(addToQueue()),
  removeFromQueue: () => dispatch(removeFromQueue()),
  setUserId: userId => dispatch(setUserId(userId)),
  setPeer: peer => dispatch(setPeer(peer)),
  clearChat: () => dispatch(clearChat()),
  addMessage: message => dispatch(addMessage(message))
});

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
