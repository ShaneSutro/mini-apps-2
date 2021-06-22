import React from 'react';

const Frames = ({ frames }) => (
  <div>
    <h1>Score</h1>
    <table>
      <tbody>
        <tr>
          {frames.scores.map((frame) => <th>Frame {frame.frame}</th>)}
        </tr>
        <tr>
          {frames.scores.map((frame) => <td>{frame.score}</td>)}
        </tr>
      </tbody>
    </table>
  </div>
);

export default Frames;
