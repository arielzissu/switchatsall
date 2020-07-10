const INITIAL_STATE = {
  username: '',
  authenticated: false,
  id: null,
  read_rules: false,
  in_queue: false
};

const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_USERNAME':
      return {
        ...state,
        username: action.username
      };
    case 'SET_USER_ID':
      return {
        ...state,
        id: action.id
      };
    case 'ADD_TO_QUEUE':
      return {
        ...state,
        in_queue: true
      };
    case 'REMOVE_FROM_QUEUE':
      return {
        ...state,
        in_queue: false
      };
    case 'SET_RULES_READ':
      return {
        ...state,
        read_rules: !state.read_rules
      };
    case 'SET_AUTHENTICATION_STATUS':
      return {
        ...state,
        authenticated: action.isAuthenticated
      };
    default:
      return state;
  }
};

export default userReducer;
