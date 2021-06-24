/* eslint-disable no-else-return */
import React from 'react';
import PropTypes from 'prop-types';

const Frames = ({ frames, total, currentFrame }) => (
  <div>
    <h1>Score</h1>
    <h2>{`Frame ${currentFrame}`}</h2>
    <h3>{`Total: ${total}`}</h3>
    <table>
      <tbody>
        <tr>
          {frames.scores.map((frame) => {
            if (frame.frame <= 10) {
              return (
                <th key={frame.frame}>
                  {`Frame ${frame.frame}`}
                </th>
              );
            }
            return null;
          })}
        </tr>
        <tr>
          {frames.scores.map((frame) => {
            if (frame.frame < 10) {
              return <td key={frame.frame}>{`${frame.score.one} | ${frame.score.two}`}</td>;
            } else if (frame.frame === 10) {
              return <td key={frame.frame}>{`${frame.score.one} | ${frame.score.two} | ${frame.score.three}`}</td>;
            } else {
              return null;
            }
          })}
        </tr>
        <tr>
          {frames.scores.map((frame) => {
            if (frame.frame <= 10) {
              return <td key={frame.frame}>{`Frame Total: ${frame.score.total}`}</td>;
            }
            return null;
          })}
        </tr>
      </tbody>
    </table>
  </div>
);

Frames.propTypes = {
  total: PropTypes.number,
  frames: PropTypes.shape({
    scores: PropTypes.arrayOf(PropTypes.shape({
      frame: PropTypes.number.isRequired,
      score: PropTypes.shape({
        one: PropTypes.number,
        two: PropTypes.number,
        total: PropTypes.number,
      }),
    })),
  }).isRequired,
  currentFrame: PropTypes.number,
};

Frames.defaultProps = {
  total: 0,
  currentFrame: 0,
};

export default Frames;
