import React from 'react';
import { shallow, mount } from 'enzyme';
import Board from './Board';
import { Provider } from 'react-redux';
import configureStore from '../store';

test('Should render the board', () => {
  mount(<Provider store={configureStore()}><Board /></Provider>);
})