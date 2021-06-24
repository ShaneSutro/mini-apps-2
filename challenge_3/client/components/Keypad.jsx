import React from 'react';

const Keypad = ({ actions }) => (
  <div>
    <table>
      <tbody>
        <tr>
          <td onClick={actions.select}>1</td>
          <td onClick={actions.select}>2</td>
          <td onClick={actions.select}>3</td>
          <td onClick={actions.select}>4</td>
        </tr>
        <tr>
          <td onClick={actions.select}>5</td>
          <td onClick={actions.select}>6</td>
          <td onClick={actions.select}>7</td>
          <td onClick={actions.select}>8</td>
        </tr>
        <tr>
          <td onClick={actions.select}>9</td>
          <td onClick={actions.select}>10</td>
          <td> </td>
          <td onClick={actions.select}>0</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default Keypad;
