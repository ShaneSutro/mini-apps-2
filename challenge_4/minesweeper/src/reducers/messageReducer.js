const reducer = (state = { message: '', type: 'default'}, action) => {
  if (action.type === 'MESSAGE_UPDATE') {
    return {
      message: action.payload.message,
      type: action.payload.type,
      };
  } else if (action.type === 'CLEAR_MESSAGE') {
    return {message: '', type: ''}
  } else {
    return state;
  }
}

export default reducer;
