/* eslint-disable import/extensions */
import React from 'react';
import ReactDOM from 'react-dom';
import Keypad from './components/Keypad.jsx';
import Frames from './components/Frames.jsx';

const { log } = console;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 0,
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
      tosses: {
        1: 0,
        2: 0,
        3: 0,
      },
      bonus: {
        forFrame: 0,
        bonusRemaining: 0,
      },
    };
  }

  frameFinished() {
    const { frame } = this.state;
    this.setState({ tosses: { 1: 0, 2: 0, 3: 0 }, toss: 1, frame: frame + 1 });
  }

  addBonus(frame, score) {
    const { scores, bonus } = this.state;
    log('checking score');
    if (bonus.bonusRemaining === 0) {
      this.setState({ bonus: { forFrame: 0, bonusRemaining: 0 } });
      return;
    }
    const frameScore = scores[bonus.forFrame - 1].score;
    scores[bonus.forFrame - 1].score = Number(frameScore) + Number(score);
    this.setState({
      bonus: {
        forFrame: bonus.forFrame,
        bonusRemaining: bonus.bonusRemaining - 1,
      },
      scores,
    });
  }

  nextTurn() {
    const { toss, frame } = this.state;
    if (toss === 2 && frame < 10) {
      this.setState({ toss: 1 });
      this.frameFinished();
    } else {
      this.setState({ toss: 1 + toss });
    }
  }

  addScore(frame, score) {
    let { scores, total } = this.state;
    scores[frame - 1].score += Number(score);
    total += Number(score);
    this.setState({ scores, total });
  }

  scoreIsValid(frame, score) {
    const { scores } = this.state;
    return scores[frame - 1].score + Number(score) <= 10;
  }

  select(event) {
    const { frame, toss } = this.state;
    const score = event.target.innerText;
    log('Frame', frame, '- toss', toss);
    if (!this.scoreIsValid(frame, score)) { return; }
    this.addBonus(frame - 1, score);
    this.addScore(frame, score);
    this.nextTurn();
    console.log(score);
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
