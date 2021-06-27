import React from 'react';
import { connect } from 'react-redux';
import BoardRow from './BoardRow';

import { boardUpdate, revealedBoard } from '../actions/board';

const mapStateToProps = (state) => {
  console.log('state', state);
  return { ...state };
}

const mapDispatchToProps = (dispatch) => ({
  boardUpdate: (board) => dispatch(boardUpdate(board)),
  revealedBoard: (revealed) => dispatch(revealedBoard(revealed))
});

const revealBoard = (func, board) => {
  console.log('Reveal Board Here')
  const fullyRevealed = []
  for (var i = 0; i < board.length; i++) {
    const row = [];
    for (var j = 0; j < board.length; j++) {
      row.push(true)
    }
    fullyRevealed.push(row)
  }
  func(fullyRevealed)
}

const isWithinBoundaries = (x, y, n) => {
  return !(x < 0 || y < 0 || x >= n || y >= n)
}

const Board = (props) => {
  let { board } = props;
  let revealed = props.revealed.revealed
  if (Object.keys(board).length === 0) {
    board = []
  }

  const revealCell = (x, y, board, revealed) => {
    if (board[x][y] === 'E') {
      revealed[x][y] = true;
      for (let i = x - 1; i < x + 2; i++) {
        for (let j = y - 1; j < y + 2; j++) {
          if (isWithinBoundaries(i, j, board.length) && !revealed[i][j]) {
            revealCell(i, j, board, revealed);
          }
        }
      }
    } else {
      console.log(`Revealing ${board[x][y]}`)
      revealed[x][y] = true;
      props.revealedBoard(revealed);
    }
  }

  const selectCell = (event) => {
    const row = Number(event.currentTarget.parentNode.getAttribute('data-x'))
    const cell = Number(event.target.getAttribute('data-y'))
    if (board[row][cell] === '💣') {
      revealBoard(props.revealedBoard, revealed);
    } else {
      console.log('revealing', row, cell)
      revealCell(row, cell, board, revealed)
    }
  };

  return (
    <div>
      <table>
        <tbody>
          {board.map((row, index) => <BoardRow key={index} actions={{select: selectCell}} row={row} x={index} revealed={revealed[index]} />)}
        </tbody>
      </table>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
