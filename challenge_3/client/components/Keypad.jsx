/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';

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

Keypad.propTypes = {
  actions: PropTypes.shape({
    select: PropTypes.func.isRequired,
  }).isRequired,
};

export default Keypad;
