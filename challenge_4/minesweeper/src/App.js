import React, { Component } from 'react';
import { connect } from 'react-redux';

import { testAction } from './actions/testAction';
import { increment } from './actions/increment';

import './App.css';
import Board from './components/Board';


const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = (dispatch) => ({
  testAction: () => dispatch(testAction()),
  increment: (number) => dispatch(increment(number))
})

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>Oh hey there</h1>
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
