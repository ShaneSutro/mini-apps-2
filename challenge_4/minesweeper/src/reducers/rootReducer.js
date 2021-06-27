import { combineReducers } from 'redux';
import board from './actionBoard';
import revealed from './actionRevealed';

export default combineReducers({
  board,
  revealed,
})
