import React, { Component } from 'react';
import SearchBar from './SearchBar';


class Home extends Component {
  render() {
    return (
      <div>
        <div className="search-bar">
          <SearchBar />
        </div>
      </div>
    );
  }
}

export default Home;