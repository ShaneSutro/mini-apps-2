const React = require('react');
const ReactDOM = require('react-dom');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { test: 'for something more' };
  }

  render() {
    const { test } = this.state;
    return (
      <h1>
        Test
        {' '}
        {test}
      </h1>
    );
  }
}

// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.getElementById('app'));
