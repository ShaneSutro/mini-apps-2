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

  test('Should not allow selecting more than 10 in a single frame', () => {
    let app = mount(<App />);
    expect(app.state().frame).toBe(1);
    expect(app.state().scores[0].score.total).toBe(0);
    app.find('#four').simulate('click', {'target': {'innerText':4}});
    app = app.update()
    expect(app.state().frame).toBe(1);
    expect(app.state().scores[0].score.total).toBe(4);
    app.find('#four').simulate('click', {'target': {'innerText':8}});
    app = app.update()
    expect(app.state().frame).toBe(1);
    expect(app.state().scores[0].score.total).toBe(4);
  });

  test('Should move on to the next frame after the second throw', () => {
    let app = mount(<App />);
    expect(app.state().frame).toBe(1);
    expect(app.state().scores[0].score.total).toBe(0);
    app.find('#four').simulate('click', { 'target': { 'innerText': 8 } });
    app.find('#four').simulate('click', { 'target': { 'innerText': 1 } });
    app = app.update()
    expect(app.state().frame).toBe(2);
    expect(app.state().total).toBe(9);
  })

  test('Should add a bonus on the next throw after a spare', () => {
    let app = mount(<App />);
    expect(app.state().frame).toBe(1);
    expect(app.state().scores[0].score.total).toBe(0);
    app.find('#four').simulate('click', { 'target': { 'innerText': 8 } });
    app.find('#four').simulate('click', { 'target': { 'innerText': 2 } });
    app.find('#four').simulate('click', { 'target': { 'innerText': 7 } });

    app = app.update()
    expect(app.state().frame).toBe(2);
    expect(app.state().total).toBe(24);
    expect(app.state().scores[0].score.total).toBe(17);
  })

  test('Should add a bonus on the next 2 throws after a strike', () => {
    let app = mount(<App />);
    expect(app.state().frame).toBe(1);
    expect(app.state().scores[0].score.total).toBe(0);
    app.find('#four').simulate('click', { 'target': { 'innerText': 10 } });
    app.find('#four').simulate('click', { 'target': { 'innerText': 3 } });
    app.find('#four').simulate('click', { 'target': { 'innerText': 4 } });

    app = app.update();
    expect(app.state().frame).toBe(3);
    expect(app.state().total).toBe(24);
    expect(app.state().scores[0].score.total).toBe(17);
  })

  test('Should allow a third throw on frame 10 after a spare', () => {
    let app = mount(<App />);
    app.setState({ frame: 10 });
    app = app.update()
    app.find('#four').simulate('click', { 'target': { 'innerText': 4 } });
    app.find('#four').simulate('click', { 'target': { 'innerText': 6 } });
    expect(app.state().frame).toBe(10);
    expect(app.state().toss).toBe(3);
    expect(app.state().gameOver).toBeFalsy();
  })

  test('Should allow a third throw on frame 10 after the first throw is a strike', () => {
    let app = mount(<App />);
    app.setState({ frame: 10 });
    app = app.update()
    app.find('#four').simulate('click', { 'target': { 'innerText': 10 } });
    app.find('#four').simulate('click', { 'target': { 'innerText': 6 } });
    expect(app.state().gameOver).toBeFalsy();
    app.find('#four').simulate('click', { 'target': { 'innerText': 3 } });
    expect(app.state().frame).toBe(10);
    expect(app.state().toss).toBe(3);
    expect(app.state().gameOver).toBeTruthy();
  })

  test('Should allow 3 strikes on the 10th frame', () => {
    let app = mount(<App />);
    app.setState({ frame: 10 });
    app = app.update()
    app.find('#four').simulate('click', { 'target': { 'innerText': 10 } });
    app.find('#four').simulate('click', { 'target': { 'innerText': 10 } });
    expect(app.state().gameOver).toBeFalsy();
    app.find('#four').simulate('click', { 'target': { 'innerText': 10 } });
    expect(app.state().frame).toBe(10);
    expect(app.state().toss).toBe(3);
    expect(app.state().scores[9].score.total).toBe(30);
    expect(app.state().gameOver).toBeTruthy();
  })

  test('Should allow a max score of 300', () => {
    let app = mount(<App />);
    app = app.update()

    for (var i = 0; i < 12; i++) {
      app.find('#four').simulate('click', { 'target': { 'innerText': 10 } });
    }

    expect(app.state().total).toBe(300);
  })
});
