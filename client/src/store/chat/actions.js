export const addMessage = (message) => ({
  type: 'ADD_MESSAGE',
  message
});

export const setPeer = (peer) => ({
  type: 'SET_PEER',
  peer
});

export const clearChat = () => ({
  type: 'CLEAR_CHAT'
});
