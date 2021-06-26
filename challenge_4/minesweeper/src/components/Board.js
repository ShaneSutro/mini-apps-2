import React from 'react';
import { connect } from 'react-redux';

import { increment } from '../actions/increment';

const mapStateToProps = (state) => ({
  ...state,
})

const mapDispatchToProps = (dispatch) => ({
  increment: (num) => dispatch(increment(num))
})

const Board = (props) => {
  return (
    <div>
      <h1>{props.actionIncrement.count}</h1>
      <pre>
        {
          JSON.stringify(props)
        }
      </pre>
    </div>
  )
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);
