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

export const flaggedBoard = (flagged) => (dispatch) => {
  dispatch({
    type: 'FLAGGED',
    payload: flagged,
  })
}

export const flagRemoved = (flagged) => (dispatch) => {
  dispatch({
    type: 'FLAG_REMOVED',
    payload: flagged,
  })
}