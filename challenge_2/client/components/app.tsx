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
        <h1>Hello!</h1>
      </div>
    );
  }
}

export default App;
