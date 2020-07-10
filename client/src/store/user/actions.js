export const addToQueue = () => ({
  type: 'ADD_TO_QUEUE'
});

export const removeFromQueue = () => ({
  type: 'REMOVE_FROM_QUEUE'
});

export const setUsername = username => {
  return {
    type: 'SET_USERNAME',
    username
  };
};

export const setUserId = id => ({
  type: 'SET_USER_ID',
  id
});

export const setRulesRead = isRulesRead => ({
  type: 'SET_RULES_READ',
  isRulesRead
});

export const setAuthenticationStatus = isAuthenticated => ({
  type: 'SET_AUTHENTICATION_STATUS',
  isAuthenticated
});
