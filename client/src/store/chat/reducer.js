const INITIAL_STATE = {
  peer: null,
  messages: []
};

const chatReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'ADD_MESSAGE':
      return {
        ...state,
        messages: [...state.messages, action.message]
      };
    case 'SET_PEER':
      return {
        ...state,
        peer: action.peer
      };
    case 'CLEAR_CHAT':
      return INITIAL_STATE;
    default:
      return state;
  }
};

export default chatReducer;
