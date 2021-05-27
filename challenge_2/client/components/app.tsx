import * as React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: '',
    };
  }

  render() {
    return (
      <div>
        <h1>Hello from React with no Express!</h1>
      </div>
    );
  }
}

export default App;
