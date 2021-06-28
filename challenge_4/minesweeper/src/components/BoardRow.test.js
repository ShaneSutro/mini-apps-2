import React from 'react';
import { shallow } from 'enzyme';
import BoardRow from './BoardRow';

const selectCell = jest.fn();
const flagCell = jest.fn();

test('Should render the board', () => {
  shallow(<BoardRow key={0} actions={{select: selectCell, flag: flagCell}} row={[0, 0, 0, 0, 0, 0, 0, 0, 0, 0]} x={0} revealed={[true, true, true, true, true, true, true, true, true, true]} flagged={[true, true, true, true, true, true, true, true, true, true]} />)
})