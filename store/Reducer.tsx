
import { combineReducers } from 'redux';
import { LoginReducer } from './loginDataReducer';
import {  ApiReducer } from './ApiReducer';
import FavReducer from './favreducer';

const rootReducer = combineReducers({
  Auth: LoginReducer,
  Apisearch : ApiReducer ,
});

export default rootReducer;