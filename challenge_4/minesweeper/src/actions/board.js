export const boardUpdate = (board) => (dispatch) => {
  dispatch({
    type: 'BOARD_UPDATE',
    payload: board,
  })
}

export const revealedBoard = (revealed) => (dispatch) => {
  dispatch({
    type: 'REVEALED_BOARD_UPDATE',
    payload: revealed,
  })
}