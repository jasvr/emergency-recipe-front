import React, { Component } from 'react';
import IngredientChips from './IngredientChips';
import './SearchBar.css';
import { Input } from 'react-materialize';
import { delay } from 'q';
// import ResultsTable from "./ResultsTable";

let searchDelay;
let searchDelayInterval = 1500;

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {
      ingredients: [],
      delay: undefined
    }

  this.handleInputChange = this.handleInputChange.bind(this);
  this.startSearchCountdown = this.startSearchCountdown.bind(this);
  this.clearSearchCountdown = this.clearSearchCountdown.bind(this);
  this.doSearch = this.doSearch.bind(this);
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

  startSearchCountdown(){
    clearTimeout(searchDelay);
    searchDelay = setTimeout(this.doSearch, searchDelayInterval);
  }

  clearSearchCountdown(){
    clearTimeout(searchDelay);
  }

  doSearch(){
    console.log("Search called");
  }
  


  render() {

    return (
      <div>
        <IngredientChips ingredients={this.state.ingredients} />
        <Input
          id={"mainSearch"}
          onChange={this.handleInputChange}
          onKeyUp={this.startSearchCountdown}
          onKeyDown={this.clearSearchCountdown}
          placeholder={"What do you need to get rid of?"}
        />
        {/* <ResultsTable /> */}
      </div>
    );
  }
}

export default SearchBar;