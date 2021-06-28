import React, { Component } from 'react';
import { connect } from 'react-redux';

import { boardUpdate, revealedBoard, flaggedBoard } from './actions/board';

import './App.css';
import Board from './components/Board';


const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = (dispatch) => ({
  boardUpdate: (board) => dispatch(boardUpdate(board)),
  revealedBoard: (revealed) => dispatch(revealedBoard(revealed)),
  flaggedBoard: (flagged) => dispatch(flaggedBoard(flagged)),
})

const isWithinBoundaries = (x, y, n) => {
  return !(x < 0 || y < 0 || x >= n || y >= n)
}

const addNumbers = (board) => {
  for (var row = 0; row < board.length; row++) {
    for (var cell = 0; cell < board[row].length; cell++) {
      if (board[row][cell] === '💣') {
        continue;
      }
      for (var i = row - 1; i < row + 2; i++) {
        for (var j = cell - 1; j < cell + 2; j++)
          if (isWithinBoundaries(i, j, board.length) && board[i][j] === '💣') {
            if (board[row][cell] === ' ') {
              board[row][cell] = 1;
            } else {
              board[row][cell]++;
          }
        }
      }
    }
  }
}

const createBoardWithMines = (n) => {
  const board = [];
  const revealed = [];
  const flagged = [];
  for (var i = 0; i < n; i++) {
    let row = []
    let revealedRow = []
    let flaggedRow = []
    for (var j = 0; j < n; j++) {
      row.push(' ')
      revealedRow.push(false)
      flaggedRow.push(false)
    }
    board.push(row);
    revealed.push(revealedRow);
    flagged.push(flaggedRow);
  }
  let bombsRemaining = n;
  while (bombsRemaining > 0) {
    let x = Math.floor(Math.random() * n)
    let y = Math.floor(Math.random() * n)
    if (board[x][y] !== '💣') {
      board[x][y] = '💣'
      bombsRemaining--;
    }
  }
  addNumbers(board);
  return ({board, revealed, flagged});
}

class App extends Component {

  componentDidMount() {
    const { board, revealed, flagged } = createBoardWithMines(10)
    this.props.boardUpdate(board);
    this.props.revealedBoard(revealed);
    this.props.flaggedBoard({ flagged, numFlags: -1 });
  }

  render() {
    return (
      <div className="App">
        <h1>Minesweeper</h1>
        <Board />
        <h3 className={this.props.messages.type}>{this.props.messages.message}</h3>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
