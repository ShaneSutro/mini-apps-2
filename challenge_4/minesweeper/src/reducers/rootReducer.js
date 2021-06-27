import { combineReducers } from 'redux';
import board from './actionBoard';
import revealed from './actionRevealed';
import flagged from './actionFlagged';
import messages from './messageReducer';

export default combineReducers({
  board,
  revealed,
  flagged,
  messages,
})
