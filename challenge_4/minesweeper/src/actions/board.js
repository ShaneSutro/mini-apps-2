export const boardUpdate = (board) => (dispatch) => {
  dispatch({
    type: 'BOARD_UPDATE',
    payload: board,
  })
}