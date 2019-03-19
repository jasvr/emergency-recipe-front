import React, { Component } from 'react';
import IngredientChips from './IngredientChips';
import './SearchBar.css';
import { Input } from 'react-materialize';
import ResultsTable from "./ResultsTable";

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
    let tokenArray = value.match(/\S+/g);
    this.setState({
      ingredients: tokenArray
    });
  }

  componentDidMount(){
    console.log("search bar component did mount.");
  }


  render() {
    return (
      <div>
        <IngredientChips ingredients={this.state.ingredients} />
        <Input
          onChange={this.handleInputChange}
          placeholder={"What do you need to get rid of?"}
        />
        {/* <ResultsTable /> */}
      </div>
    );
  }
}

export default SearchBar;