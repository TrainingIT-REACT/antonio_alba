import { createStore, combineReducers } from "redux";

import history from './reducers/history';
import user from './reducers/user';

export default createStore(combineReducers({ history, user }));