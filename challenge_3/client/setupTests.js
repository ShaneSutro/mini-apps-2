/* eslint-disable no-undef */
const Enzyme = require('enzyme');
const { shallow } = require('enzyme');
const Adapter = require('enzyme-adapter-react-17-updated');

Enzyme.configure({ adapter: new Adapter() });
