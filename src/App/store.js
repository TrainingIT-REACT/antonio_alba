import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from 'redux-thunk';

import albums from './reducers/albums';
import songs from './reducers/songs';
import history from './reducers/history';
import user from './reducers/user';

export default createStore(
  combineReducers({ albums, songs, history, user }),
  applyMiddleware(thunk)
);
