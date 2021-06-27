import React, { Component } from 'react';
import { connect } from 'react-redux';

import { boardUpdate } from './actions/board';
import { increment } from './actions/increment';

import './App.css';
import Board from './components/Board';


const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = (dispatch) => ({
  boardUpdate: (board) => dispatch(boardUpdate(board)),
  increment: (number) => dispatch(increment(number))
})

const isWithinBoundaries = (x, y, n) => {
  return !(x < 0 || y < 0 || x >= n || y >= n)
}

const addNumbers = (board) => {
  for (var row = 0; row < board.length; row++) {
    console.log(board.length);
    for (var cell = 0; cell < board[row].length; cell++) {
      if (board[row][cell] === '💣') {
        continue;
      }
      for (var i = row - 1; i < row + 2; i++) {
        for (var j = cell - 1; j < cell + 2; j++)
        if (isWithinBoundaries(i, j, board.length) && board[i][j] === '💣') {
          board[row][cell]++;
        }
      }
    }
  }
}

const createBoardWithMines = (n) => {
  const board = [];
  for (var i = 0; i < n; i++) {
    let row = []
    for (var j = 0; j < n; j++) {
      row.push(0)
    }
    board.push(row);
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
  return board;
}

class App extends Component {

  componentDidMount() {
    const board = createBoardWithMines(10)
    this.props.boardUpdate(board);
  }

  render() {
    return (
      <div className="App">
        <h1>Minesweeper</h1>
        <h3>Count: {this.props.actionIncrement.count}</h3>
        <pre>
          {
            JSON.stringify(this.props)
          }
        </pre>
        <button onClick={() => this.props.increment(this.props.actionIncrement.count)}>Test Action</button>
        <Board />
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
