/* eslint-disable no-undef */
import React from 'react';
import { render, shallow, mount } from 'enzyme';

import App from './app.jsx';

describe('Testing the scoring algorithms', () => {
  test('Should render correctly with no props', () => {
    const app = shallow(<App />);
  });

  test('Should have a Keypad, Frames, and gameOver component', () => {
    const app = render(<App />);
    expect(app.children().length).toBe(3);
  });

  test.only('Should not allow selecting more than 10 in a single frame', () => {
    const app = mount(<App />);
    expect(app.state().frame).toBe(1);
    expect(app.state().scores[0].score.total).toBe(0);
    app.find('#four').simulate('click');
    // app.find('#keypad') // <table>
    //   .childAt(0) // <tbody>
    //   .childAt(0) // <tr>
    //   .childAt(2) // <td> for number 4
    //   .simulate('click');
    app.instance().forceUpdate();
    expect(app.state().frame).toBe(1);
    expect(app.state().scores[0].score.total).toBe(4);
  });
});
