import React from 'react';
import { connect } from 'react-redux';
import BoardRow from './BoardRow';

import { increment } from '../actions/increment';

const mapStateToProps = (state) => ({
  ...state,
})

const mapDispatchToProps = (dispatch) => ({
  increment: (num) => dispatch(increment(num))
})

const Board = ({ board }) => {
  if (Object.keys(board).length === 0) {
    board = []
  }
  return (
    <div>
      <table>
        <tbody>
          {console.log(board)}
          {board.map((row) => <BoardRow row={row} />)}
        </tbody>
      </table>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
