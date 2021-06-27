const reducer = (state = { revealed: []}, action) => {
  if (action.type === 'REVEALED_BOARD_UPDATE') {
    return {
      revealed: action.payload,
      };
  } else {
    return state;
  }
}

export default reducer;
