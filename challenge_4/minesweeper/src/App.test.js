import { render, screen } from '@testing-library/react';
import { mount } from 'enzyme';
import App from './App';
import { Provider } from 'react-redux';
import configureStore from './store';
import fixtures from './fixtures'

import { boardUpdate, revealedBoard, flaggedBoard, flagRemoved } from './actions/board';

test('renders to screen correctly', () => {
  render(<Provider store={configureStore()}><App /></Provider>)
  expect(screen.getByText('Minesweeper')).toBeInTheDocument();
});

test('renders child components', () => {
  const store = configureStore()
  let app = mount(<Provider store={store}><App /></Provider>);
  app.childAt(0).childAt(0).props().boardUpdate(fixtures.blankBoard)
  app = app.update()
  let board = app.childAt(0);
})

test('shoud show a loss when a bomb is clicked', () => {
  const store = configureStore()
  let app = mount(<Provider store={store}><App /></Provider>);
  app.childAt(0).childAt(0).props().boardUpdate(fixtures.bombBoard)
  app.find('td').first().simulate('click')
  app = app.update()
  let boardProps = app.childAt(0).childAt(0).props();
  expect(boardProps.messages.message).toBe('You lost!');
  expect(boardProps.messages.type).toBe('destructive');
})

test('should reveal a cell when clicked on', () => {
  const store = configureStore()
  let app = mount(<Provider store={store}><App /></Provider>);
  app.childAt(0).childAt(0).props().boardUpdate(fixtures.blankBoard)
  app.find('td').first().simulate('click')
  app = app.update()
  let boardProps = app.childAt(0).childAt(0).props();
  expect(boardProps.revealed.revealed[0][0]).toBe(true);
})

test('should reveal surrounding cells when a blank cell is clicked', () => {
  const store = configureStore()
  let app = mount(<Provider store={store}><App /></Provider>);
  app.childAt(0).childAt(0).props().boardUpdate(fixtures.blankBoard)
  app.find('td').first().simulate('click')
  app = app.update()
  let boardProps = app.childAt(0).childAt(0).props();
  expect(boardProps.revealed.revealed[0][0]).toBe(true);
  expect(boardProps.revealed.revealed[9][9]).toBe(true);
})

test('should detect a win when all squares except bombs are revealed', () => {
  const store = configureStore()
  let app = mount(<Provider store={store}><App /></Provider>);
  app.childAt(0).childAt(0).props().boardUpdate(fixtures.singleRowBombs)
  app.childAt(0).childAt(0).props().revealedBoard(fixtures.singleRowRevealed)
  app = app.update()
  app.find('td').first().simulate('click');
  app = app.update()
  let boardProps = app.childAt(0).childAt(0).props();
  expect(boardProps.messages.message).toBe('Congratulations, you won!');
  expect(boardProps.messages.type).toBe('good');
})
