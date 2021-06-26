export const increment = (num) => (dispatch) => {
  dispatch({
    type: 'INCREMENT',
    payload: num + 1,
  })
}