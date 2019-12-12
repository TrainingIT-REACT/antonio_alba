import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';

import albums from './reducers/albums';
import history from './reducers/history';
import user from './reducers/user';

export default createStore(
  combineReducers({ albums, history, user }),
  applyMiddleware(thunk)
);
