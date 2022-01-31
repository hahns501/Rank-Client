import { combineReducers } from "redux";

import products from './products';
import authReducer from './auth';
import users from './users';
import activeUsers from "./activeUsers";

export default combineReducers({products, authReducer, users, activeUsers})