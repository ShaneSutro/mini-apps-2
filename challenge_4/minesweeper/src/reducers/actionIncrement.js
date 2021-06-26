const reducer = (state = { count: 0 }, action) => {
  if (action.type === 'INCREMENT') {
    return {
      count: action.payload
    }
  } else {
    return state;
  }
}

export default reducer;
