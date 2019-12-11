import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';

import history from './reducers/history';
import user from './reducers/user';

export default createStore(
  combineReducers({ history, user }),
  applyMiddleware(thunk)
);
