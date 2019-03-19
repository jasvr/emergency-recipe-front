import React, { Component } from 'react';
import IngredientChips from './IngredientChips';
import './SearchBar.css';
import { Input } from 'react-materialize';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      ingredients: []
    }

  this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(e){
    // Grab the value from the input.
    e.preventDefault();
    const target = e.target;
    const value = target.value;
    // console.log("Input value: ", value);
    let tokenArray = value.match(/\S+/g);
    console.log("tokenArray: ", tokenArray);
    this.setState({
      ingredients: tokenArray
    });
    console.log("State: ", this.state);
  }


  render() {
    return (
      <div>
        <IngredientChips ingredients={this.state.ingredients} />
        <Input onChange={this.handleInputChange} placeholder={"What do you need to get rid of?"} />
      </div>
    );
  }
}

export default SearchBar;