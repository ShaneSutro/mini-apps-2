import * as React from 'react';
import * as ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate'

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
  }?],
  pageCount: number,
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      events: [],
      pageCount: 1,
    };
  }

  handlePageClick(): void {
    console.log('Clicked!')
  }

  componentDidMount() {
    fetch('http://localhost:3000/events')
      .then((result) => result.json())
      .then((records) => {
        const newRecords: AppState['events'] = records.slice(0, 10);
        this.setState({ events: newRecords})
      })
      .catch((err) => console.error(err));
  }

  render() {
    return (
      <div>
        <h1>Test</h1>
        <ReactPaginate
          previousLabel={'previous'}
          nextLabel={'next'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </div>
    );
  }
}

// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.getElementById('app'));
