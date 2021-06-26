/* eslint-disable no-plusplus */
/* eslint-disable import/extensions */
import React from 'react';
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
    let { total } = this.state;
    for (let i = 0; i < bonuses.length; i++) {
      const bonus = bonuses[i];
      if (bonus.bonusRemaining > 0 && bonus.forFrame <= 10) {
        const frameScore = scores[bonus.forFrame - 1].score.total;
        if (bonus.forFrame !== 10) {
          scores[bonus.forFrame - 1].score.total = Number(frameScore) + Number(score);
        }
        let newTotal = 0;
        for (var j = 0; j < scores.length; j++) {
          newTotal += scores[j].score.total;
        }
        bonuses[i].bonusRemaining--;
        this.setState({
          bonuses,
          scores,
          total: newTotal,
        });
      }
    }
  }

  nextTurn() {
    const { toss, frame, scores } = this.state;
    if (frame === 10 && toss === 3) {
      if (toss === 3) {
        this.setState({ gameOver: 'Game over!' });
        return;
      } else if (toss === 2 && scores[9].score.one + scores[9].score.two < 10) {
        this.setState({ gameOver: 'Game over!' });
        return;
      }
    }

    if (frame !== 10) {
      if ((toss === 2 && frame < 10) || scores[frame - 1].score.total === 10) {
        this.setState({ toss: 1 });
        this.frameFinished();
      } else {
        this.setState({ toss: 1 + toss });
      }
    } else if (toss !== 3) {
      this.setState({ toss: 1 + toss });
    } else if (toss === 3) {
      this.frameFinished();
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
    const { scores, toss } = this.state;
    if (frame === 10) {
      const frameTenScores = scores[9].score;
      if (toss < 3 && frameTenScores.one !== 10) {
        if (frameTenScores.one + frameTenScores.two > 10) {
          return false;
        }
      }
      if (frameTenScores.one === 10 && frameTenScores.two !== 10) {
        if (frameTenScores.two + Number(score) > 10) {
          return false;
        }
      }
      return true;
    }
    return scores[frame - 1].score.total + Number(score) <= 10;
  }

  checkStrikeOrSpare() {
    const {
      frame,
      toss,
      scores,
      bonuses,
    } = this.state;
    if (toss <= 2) {
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
    const { frame, toss, gameOver } = this.state;
    const score = event.target.innerText;
    if (gameOver !== '') { return; }
    if (!this.scoreIsValid(frame, score)) { return; }
    this.addScore(frame, score, toss);
    this.addBonus(frame - 1, score);
    this.checkStrikeOrSpare();
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

export default App;
