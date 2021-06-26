const reducer = (state = {}, action) => {
  if (action.type === 'BOARD_UPDATE') {
    return action.payload;
  } else {
    return state;
  }
}

export default reducer;
