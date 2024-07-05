
import { combineReducers } from 'redux';
import { LoginReducer } from './loginDataReducer';
import { ApiReducer } from './ApiReducer';

const rootReducer = combineReducers({
  Auth: LoginReducer,
  Apisearch : ApiReducer
});

export default rootReducer;