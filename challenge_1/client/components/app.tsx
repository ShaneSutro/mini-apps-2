import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as ReactPaginate from 'react-paginate'

interface AppProps  {
}

interface AppState {
  events: [{
    category1: string,
    category2: string,
    date: string,
    description: string,
    granularity: string,
    lang: string
  }?]
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      events: []
    };
  }

  async componentDidMount() {
    await fetch('http://localhost:3000/events')
      .then((result) => result.json())
      .then((records) => {
        const newRecords: AppState['events'] = records.slice(0, 10);
        this.setState({ events: newRecords})
      })
      .catch((err) => console.error(err));
  }

  render() {
    const { events } = this.state;
    return (
      <h1>
        Test
      </h1>
    );
  }
}

// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.getElementById('app'));
