import { combineReducers } from 'redux';
import board from './actionBoard';
import actionIncrement from './actionIncrement';

export default combineReducers({
  board,
  actionIncrement,
})
