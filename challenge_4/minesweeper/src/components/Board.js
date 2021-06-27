import React from 'react';
import { connect } from 'react-redux';
import BoardRow from './BoardRow';

import { boardUpdate, revealedBoard, flaggedBoard, flagRemoved } from '../actions/board';
import { messageUpdate, removeMessage } from '../actions/messages';

const mapStateToProps = (state) => {
  return { ...state };
}

const mapDispatchToProps = (dispatch) => ({
  boardUpdate: (board) => dispatch(boardUpdate(board)),
  revealedBoard: (revealed) => dispatch(revealedBoard(revealed)),
  flagCell: (flagged) => dispatch(flaggedBoard(flagged)),
  removeFlag: (flagged) => dispatch(flagRemoved(flagged)),
  messageUpdate: (message) => dispatch(messageUpdate(message)),
  removeMessage: () => dispatch(removeMessage()),
});

const revealBoard = (func, board) => {
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
  let revealed = props.revealed.revealed;
  let flagged = props.flagged.flagged;
  if (Object.keys(board).length === 0) {
    board = []
  }

  const revealCell = (x, y, board, revealed) => {
    if (board[x][y] === ' ') {
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
    if (event.target.innerText === '⛳️') { return; }
    if (event.type === 'contextmenu') { return; }
    const row = Number(event.currentTarget.parentNode.getAttribute('data-x'))
    const cell = Number(event.target.getAttribute('data-y'))
    if (board[row][cell] === '💣') {
      props.messageUpdate({message: 'You lost!', type: 'destructive'})
      revealBoard(props.revealedBoard, revealed);
    } else {
      console.log('revealing', row, cell)
      revealCell(row, cell, board, revealed)
    }
    checkForWin(props.flagged.numFlags);
  };

  const flagCell = async (event) => {
    event.preventDefault();
    const row = Number(event.currentTarget.parentNode.getAttribute('data-x'))
    const cell = Number(event.target.getAttribute('data-y'))
    if (!flagged[row][cell] && !revealed[row][cell]) {
      if (props.flagged.numFlags >= Math.floor(board.length * board.length / 10)) {
        return;
      }
      flagged[row][cell] = true
      await props.flagCell({flagged, numFlags: props.flagged.numFlags});
      checkForWin(props.flagged.numFlags + 1);
    } else {
      flagged[row][cell] = false
      props.removeFlag({flagged, numFlags: props.flagged.numFlags});
      checkForWin(props.flagged.numFlags - 1);
    }
  }

  const checkForWin = (flags) => {
    const cells = board.length * board.length
    const totalBombs = cells / 10;
    const revealedThreshold = cells - (cells / 10)
    let bombsCovered = 0;
    let cellsRevealed = 0;
    for (var i = 0; i < board.length; i++) {
      for (var j = 0; j < board.length; j++) {
        if (revealed[i][j]) {
          cellsRevealed++
        }
        if (flagged[i][j] && board[i][j] === '💣') {
          bombsCovered++;
        }
      }
    }
    if (bombsCovered === totalBombs || cellsRevealed === revealedThreshold) {
      revealBoard(props.revealedBoard, revealed)
      props.messageUpdate({message: 'Congratulations, you won!', type: 'good'})
    }
  }

  return (
    <div>
      <table>
        <tbody>
          {board.map((row, index) => <BoardRow key={index} actions={{select: selectCell, flag: flagCell}} row={row} x={index} revealed={revealed[index]} flagged={flagged[index]} />)}
        </tbody>
      </table>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
