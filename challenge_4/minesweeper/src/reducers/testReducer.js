const reducer = (state = { count: 0 }, action) => {
  if (action.type === 'TEST_ACTION') {
    return {
      result: action.payload,
    }
  } else if (action.type === 'INCREMENT') {
    return {
      count: action.payload
    }
  } else {
    return state;
  }
};

export default reducer;
