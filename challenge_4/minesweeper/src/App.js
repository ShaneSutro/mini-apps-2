import React, { Component } from 'react';
import { connect } from 'react-redux';

import { testAction } from './actions/testAction';
import { increment } from './actions/increment';

import './App.css';


const mapStateToProps = (state) => ({
  ...state
})

const mapDispatchToProps = (dispatch) => ({
  testAction: () => dispatch(testAction()),
  increment: (number) => dispatch(increment(number))
})

class App extends Component {

  testAction(event) {
    this.props.testAction();
  }

  increment(number) {
    console.log('increment', number)
    this.props.increment(number)
  }

  render() {
    return (
      <div className="App">
        <h1>Oh hey there</h1>

        <pre>
          {
            JSON.stringify(this.props)
          }
        </pre>
        <button onClick={() => this.increment(this.props.testReducer.count)}>Test Action</button>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
