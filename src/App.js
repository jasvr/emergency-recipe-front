import React, { Component } from 'react';
import SearchBar from './SearchBar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        <main>
          <div className="search-bar">
            <SearchBar />
          </div>

        </main>


      </div>
    );
  }
}

export default App;
