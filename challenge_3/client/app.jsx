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
          score: {
            one: 0,
            two: 0,
            total: 0,
          },
        },
        {
          frame: 2,
          score: {
            one: 0,
            two: 0,
            total: 0,
          },
        },
        {
          frame: 3,
          score: {
            one: 0,
            two: 0,
            total: 0,
          },
        },
        {
          frame: 4,
          score: {
            one: 0,
            two: 0,
            total: 0,
          },
        },
        {
          frame: 5,
          score: {
            one: 0,
            two: 0,
            total: 0,
          },
        },
        {
          frame: 6,
          score: {
            one: 0,
            two: 0,
            total: 0,
          },
        },
        {
          frame: 7,
          score: {
            one: 0,
            two: 0,
            total: 0,
          },
        },
        {
          frame: 8,
          score: {
            one: 0,
            two: 0,
            total: 0,
          },
        },
        {
          frame: 9,
          score: {
            one: 0,
            two: 0,
            total: 0,
          },
        },
        {
          frame: 10,
          score: {
            one: 0,
            two: 0,
            three: 0,
            total: 0,
          },
        },
        {
          frame: 11,
          score: {
            one: 0,
            two: 0,
            total: 0,
          },
        },
        {
          frame: 12,
          score: {
            one: 0,
            two: 0,
            total: 0,
          },
        },
      ],
      frame: 1,
      toss: 1,
      bonuses: [],
      gameOver: '',
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
        const frameScore = scores[bonus.forFrame - 1].score.total;
        scores[bonus.forFrame - 1].score.total = Number(frameScore) + Number(score);
        bonuses[i].bonusRemaining--;
        this.setState({
          bonuses,
          scores,
        });
      }
    }
  }

  nextTurn(score) {
    const { toss, frame, scores } = this.state;
    if (frame > 11 || (frame === 11 && toss === 1 && score < 10)) {
      this.setState({ gameOver: 'Game over!' });
      return;
    }
    if (frame !== 10) {
      if ((toss === 2 && frame < 10) || scores[frame - 1].score.total === 10) {
        this.setState({ toss: 1 });
        this.frameFinished();
      } else {
        this.setState({ toss: 1 + toss });
      }
    } else {
      console.log('increment toss');
      if (toss !== 3) {
        this.setState({ toss: 1 + toss });
      } else if (toss === 3) {
        this.frameFinished();
      }
    }
  }

  addScore(frame, score, toss) {
    const tosses = {
      1: 'one',
      2: 'two',
      3: 'three',
    };
    const turn = tosses[toss];
    let { total } = this.state;
    const { scores } = this.state;
    scores[frame - 1].score[turn] += Number(score);
    scores[frame - 1].score.total += Number(score);
    total += Number(score);
    this.setState({ scores, total });
  }

  scoreIsValid(frame, score) {
    const { scores } = this.state;
    if (frame !== 10) {
      return scores[frame - 1].score.total + Number(score) <= 10;
    } else {
      return true;
    }
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
      const score = scores[frame - 1].score.total;
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
    console.log('adding bonus')
    this.addBonus(frame - 1, score);
    console.log('adding bonus 2')
    this.addScore(frame, score, toss);
    console.log('adding bonus 3')
    this.checkStrikeOrSpare();
    console.log('adding bonus 4')
    this.nextTurn(score);
  }

  render() {
    const {
      scores,
      total,
      gameOver,
      frame,
    } = this.state;
    return (
      <div>
        <h1>{gameOver}</h1>
        <Keypad actions={{ select: this.select.bind(this) }} />
        <Frames frames={{ scores }} total={total} currentFrame={frame} />
      </div>
    );
  }
}

// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.getElementById('app'));
