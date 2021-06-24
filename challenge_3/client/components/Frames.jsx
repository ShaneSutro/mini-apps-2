import React from 'react';
import PropTypes from 'prop-types';

const Frames = ({ frames, total }) => (
  <div>
    <h1>Score</h1>
    <h3>
      Total:
      {total}
    </h3>
    <table>
      <tbody>
        <tr>
          {frames.scores.map((frame) => {
            if (frame.frame <= 10) {
              return (
                <th>
                  Frame
                  {frame.frame}
                </th>
              );
            }
            return null;
          })}
        </tr>
        <tr>
          {frames.scores.map((frame) => {
            if (frame.frame <= 10) {
              return <td>{frame.score}</td>;
            }
            return null;
          })}
        </tr>
      </tbody>
    </table>
  </div>
);

Frames.propTypes = {
  total: PropTypes.string,
  frames: PropTypes.shape({
    scores: PropTypes.arrayOf(PropTypes.shape({
      frame: PropTypes.number.isRequired,
      score: PropTypes.number.isRequired,
    })),
  }).isRequired,
};

Frames.defaultProps = {
  total: 0,
};

export default Frames;
