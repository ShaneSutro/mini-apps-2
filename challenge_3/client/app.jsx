/* eslint-disable no-plusplus */
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
        {
          frame: 11,
          score: 0,
        },
        {
          frame: 12,
          score: 0,
        },
      ],
      frame: 1,
      toss: 1,
      bonuses: [],
    };
  }

  frameFinished() {
    const { frame } = this.state;
    this.setState({ toss: 1, frame: frame + 1 });
  }

  addBonus(frame, score) {
    const { scores, bonuses } = this.state;
    log('checking score');
    for (let i = 0; i < bonuses.length; i++) {
      const bonus = bonuses[i];
      if (bonus.bonusRemaining > 0) {
        const frameScore = scores[bonus.forFrame - 1].score;
        scores[bonus.forFrame - 1].score = Number(frameScore) + Number(score);
        bonuses[i].bonusRemaining--;
        this.setState({
          bonuses,
          scores,
        });
      }
    }
  }

  nextTurn() {
    const { toss, frame, scores } = this.state;
    if ((toss === 2 && frame < 10) || scores[frame - 1].score === 10) {
      this.setState({ toss: 1 });
      this.frameFinished();
    } else {
      this.setState({ toss: 1 + toss });
    }
  }

  addScore(frame, score) {
    let { total } = this.state;
    const { scores } = this.state;
    scores[frame - 1].score += Number(score);
    total += Number(score);
    this.setState({ scores, total });
  }

  scoreIsValid(frame, score) {
    const { scores } = this.state;
    return scores[frame - 1].score + Number(score) <= 10;
  }

  checkStrikeOrSpare() {
    const {
      frame,
      toss,
      scores,
      bonuses,
    } = this.state;
    if (toss > 2) {
      // TODO: handle logic for 10th frame here
    } else {
      const { score } = scores[frame - 1];
      if (score === 10) {
        const bonus = {
          forFrame: frame,
          bonusRemaining: 0,
        };
        if (toss === 1) {
          bonus.bonusRemaining = 2;
          bonuses.push(bonus);
          this.setState({ bonuses });
        } else if (toss === 2) {
          bonus.bonusRemaining = 1;
          bonuses.push(bonus);
          this.setState({ bonuses });
        }
      }
    }
  }

  select(event) {
    const { frame, toss } = this.state;
    const score = event.target.innerText;
    log('Frame', frame, '- toss', toss);
    if (!this.scoreIsValid(frame, score)) { return; }
    this.addBonus(frame - 1, score);
    this.addScore(frame, score);
    this.checkStrikeOrSpare();
    this.nextTurn();
    console.log(score);
  }

  render() {
    const { scores, total } = this.state;
    return (
      <div>
        <Keypad actions={{ select: this.select.bind(this) }} />
        <Frames frames={{ scores }} total={total} />
      </div>
    );
  }
}

// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.getElementById('app'));
