import * as React from 'react';
import * as ReactDOM from 'react-dom';

interface AppProps  {
}

interface AppState {
  test: string
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = { test: 'for something more than that' };
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
