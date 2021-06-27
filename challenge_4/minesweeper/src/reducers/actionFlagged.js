const reducer = (state = {flagged: [], numFlags: 0}, action) => {
  if (action.type === 'FLAGGED') {
    return {
      flagged: action.payload.flagged,
      numFlags: action.payload.numFlags + 1,
    };
  } else if (action.type === 'FLAG_REMOVED') {
    return {
      flagged: action.payload.flagged,
      numFlags: action.payload.numFlags - 1
    }
  } else {
    return state;
  }
}

export default reducer;
