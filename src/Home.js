import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ResultsTable from './ResultsTable';

class Home extends Component {
  render() {
    return (
      <div>
        <div className="search-bar">
          <SearchBar />
          {/* <ResultsTable /> */}
        </div>
      </div>
    );
  }
}

export default Home;