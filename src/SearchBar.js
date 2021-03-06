import React, { Component } from "react";
import IngredientChips from "./IngredientChips";
import "./SearchBar.css";
import { Input } from "react-materialize";
import ResultsTable from "./ResultsTable";

let searchDelay;
let searchDelayInterval = 500;

const API_URL = "https://emergency-recipe-backend.herokuapp.com/api/recipe";

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ingredients: [],
      searchResults: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.startSearchCountdown = this.startSearchCountdown.bind(this);
    this.clearSearchCountdown = this.clearSearchCountdown.bind(this);
    this.doSearch = this.doSearch.bind(this);
  }

  handleInputChange(e) {
    // Grab the value from the input.
    e.preventDefault();
    const target = e.target;
    const value = target.value;
    let tokenArray = value.match(/\S+/g);
    this.setState({
      ingredients: tokenArray
    });
  }

  startSearchCountdown() {
    clearTimeout(searchDelay);
    searchDelay = setTimeout(this.doSearch, searchDelayInterval);
  }

  clearSearchCountdown() {
    clearTimeout(searchDelay);
  }

  uppercaseFirstLetterArray(arrayArg) {
    let fixedArray = [];

    if (arrayArg !== null) {
      for (let i = 0; i < arrayArg.length; i++) {
        let currentWord = arrayArg[i];
        fixedArray.push(
          currentWord.charAt(0).toUpperCase() + currentWord.slice(1)
        );
      }
      return fixedArray;
    } else {
      return arrayArg;
    }
  }

  doSearch() {
    let searchArray = this.uppercaseFirstLetterArray(this.state.ingredients);
    if (this.state.ingredients) {
      fetch(API_URL, {
        method: "POST",
        cache: "no-cache",
        body: JSON.stringify(searchArray),
        headers: {
          "Content-Type": "application/json"
        }
      })
        .then(res => res.json())
        .then(res => {
          this.setState({
            searchResults: res
          });
        })
        .catch(err => {
          console.log("Error: ", err);
        });
    } else {
      this.setState({
        searchResults: []
      });
    }
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
          label={"What do you need to get rid of?"}
        />
        <ResultsTable searchResults={this.state.searchResults} />
      </div>
    );
  }
}

export default SearchBar;
