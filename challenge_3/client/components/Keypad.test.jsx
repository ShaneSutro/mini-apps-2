/* eslint-disable no-undef */
import React from 'react';
import { shallow } from 'enzyme';

import Keypad from './Keypad.jsx'

describe('Testing the scoring algorithms', () => {
  test('Should be set up correctly', () => {
    const keypad = shallow(<Keypad actions={{ select: () => { } }} />);
    expect(keypad).toMatchSnapshot();
  });

  test('Should be a 4 by 3 grid', () => {
    const keypad = shallow(<Keypad actions={{ select: () => { } }} />);
    expect(keypad.find('td').length).toBe(12);
  });

  test('Should call the actions.select function when clicked', () => {
    const select = jest.fn();
    const keypad = shallow(<Keypad actions={{ select }} />);
    keypad.find('tbody').childAt(0).childAt(0).simulate('click');
    expect(select).toHaveBeenCalled();
  });
});
