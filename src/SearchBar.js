import React, { Component } from 'react';
import './SearchBar.css';
import { Input } from 'react-materialize';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      ingredients: []
    }
  }

  handleInputChange(e){
    // Grab the value from the input.
    e.preventDefault();  //Is this needed?
    const target = e.target;
    const value = target.value;
    console.log("Input value: ", value);
    console.log(value.match(/\S+/g));
  }


  render() {
    return (
      <div>
        <Input onChange={this.handleInputChange} />
      </div>
    );
  }
}

export default SearchBar;