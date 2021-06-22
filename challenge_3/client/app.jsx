/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import Keypad from './components/Keypad.jsx';
import Frames from './components/Frames.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      scores: [
        {
          frame: 1,
          score: 0,
        },
        {
          frame: 2,
          score: 0,
        },
        {
          frame: 3,
          score: 0,
        },
        {
          frame: 4,
          score: 0,
        },
        {
          frame: 5,
          score: 0,
        },
        {
          frame: 6,
          score: 0,
        },
        {
          frame: 7,
          score: 0,
        },
        {
          frame: 8,
          score: 0,
        },
        {
          frame: 9,
          score: 0,
        },
        {
          frame: 10,
          score: 0,
        },
      ],
      frame: 1,
      toss: 1,
    };
  }

  select(event) {
    console.log('Saving!')
    console.log(event.target.innerText)
  }

  render() {
    const { scores } = this.state;
    return (
      <div>
        <Keypad actions={{ select: this.select.bind(this) }} />
        <Frames frames={{ scores }} />
      </div>
    );
  }
}

// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.getElementById('app'));
