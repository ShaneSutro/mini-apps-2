import * as React from 'react';
import ReactPaginate from 'react-paginate'
import EventList from './eventList';

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
  currentPage: number,
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      events: [],
      pageCount: 0,
      currentPage: 0,
    };
  }

  handlePageClick(): void {
    console.log('Clicked!')
  }

  getSpecifiedRecords(page: string): void {
    fetch(`http://localhost:3000/events?_page=${page}&_limit=10`)
      .then((result) => {
        this.setState({ pageCount: Math.ceil( Number(result.headers.get('X-Total-Count')) / 10 ) })
        return result.json()
      })
      .then((records) => {
        const newRecords: AppState['events'] = records;
        this.setState({
          events: newRecords,
        })
      })
      .catch((err) => console.error(err));
  }

  componentDidMount() {
    // this.getSpecifiedRecords('0');
  }

  render() {
    return (
      <div>
        <h1>Test</h1>
        <EventList events={this.state.events} />
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

export default App;
