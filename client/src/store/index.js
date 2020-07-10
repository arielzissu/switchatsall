import { createStore, combineReducers } from 'redux';

import socketReducer from './socket/reducer';
import userReducer from './user/reducer';
import chatReducer from './chat/reducer';

export default createStore(combineReducers({
  socket: socketReducer,
  user: userReducer,
  chat: chatReducer
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
