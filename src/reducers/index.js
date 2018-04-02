import { combineReducers } from 'redux';
import auth from './auth';
import rooms from './rooms';

const reducer = combineReducers({
  auth,
  rooms
});

export default reducer;
