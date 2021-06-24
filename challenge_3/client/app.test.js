/* eslint-disable no-undef */
const App = require('./app.jsx');

describe('Testing the scoring algorithms', () => {
  test('Should render correctly with no props', () => {
    const app = shallow(<App />);
    expect(app).toMatchSnapshot();
  });
});
