const reducer = (state = {}, action) => {
  if (action.type === 'TEST_ACTION') {
    return {
      result: action.payload,
    }
  } else {
    return state;
  }
};

export default reducer;
