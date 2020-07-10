const INITIAL_STATE = {
  connected: false,
  error: false,
};

const socketReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'CONNECTION_UPDATED':
      return {
        ...state,
        connected: action.connected,
        error: action.error
      };
    default:
      return state;
  }
};

export default socketReducer;
