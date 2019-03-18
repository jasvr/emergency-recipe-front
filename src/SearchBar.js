import React, { Component } from 'react';
import './SearchBar.css';
// import { Input } from 'react-materialize';

class SearchBar extends Component {
  render() {
    return (
      <div>
        {/* <Input label="What do you need to get rid of?" /> */}
        <div class="chips chips-placeholder" />
      </div>
    );
  }
}

export default SearchBar;