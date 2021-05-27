import * as React from 'react';
import * as ReactDOM from 'react-dom';
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
  searchTerm: string,
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: {} | Readonly<{}>) {
    super(props);
    this.state = {
      events: [],
      pageCount: 0,
      currentPage: 0,
      searchTerm: '',
    };
  }

  handlePageClick(e): void {
    this.getSpecifiedRecords(e.selected + 1, this.state.searchTerm)
  }

  getSpecifiedRecords(page: number, searchTerm: string): void {
    fetch(`http://localhost:3000/events?_page=${page}&_limit=10&q=${searchTerm}`)
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

  search(e) {
    e.preventDefault();
    console.log('Searching for', this.state.searchTerm);
    this.getSpecifiedRecords(0, this.state.searchTerm);
    this.setState({currentPage: 0})
  }

  textFieldDidChange(e) {
    this.setState({searchTerm: e.target.value})
  }

  nextPage() {
    const currentPage = this.state.currentPage + 1;
    this.setState({ currentPage });
  }

  render() {
    return (
      <div>
        <h1>Historical Events Finder</h1>
        <form onSubmit={this.search.bind(this)}>
          <label htmlFor="search">Search Using Keywords</label>
          <input onChange={this.textFieldDidChange.bind(this)} name="search" placeholder="Type something here..." value={this.state.searchTerm}></input>
          <button type="submit">Search</button>
        </form>
        <EventList events={this.state.events} />
        <ReactPaginate
          previousLabel={'PREV'}
          nextLabel={'NEXT'}
          breakLabel={'...'}
          breakClassName={'break-me'}
          pageCount={this.state.pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick.bind(this)}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      </div>
    );
  }
}

// eslint-disable-next-line no-undef
ReactDOM.render(<App />, document.getElementById('app'));
