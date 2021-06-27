export const messageUpdate = (message) => (dispatch) => {
  dispatch({
    type: 'MESSAGE_UPDATE',
    payload: message,
  })
}

export const removeMessage = () => (dispatch) => {
  dispatch({
    type: 'CLEAR_MESSAGE',
    payload: {
      message: '',
      type: 'default',
    }
  })
}