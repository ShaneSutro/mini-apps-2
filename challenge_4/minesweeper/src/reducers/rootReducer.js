import { combineReducers } from 'redux';
import testReducer from './testReducer';
import actionIncrement from './actionIncrement';

export default combineReducers({
  testReducer,
  actionIncrement,
})
