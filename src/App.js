import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import Title from "./Title.js";
import { Container } from "react-materialize";
import "./App.css";
import RecipeView from "./RecipeView.js";
import RecipeFormView from "./RecipeFormView";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <main>
            <div className="title">
              <Title />
            </div>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/recipe-view" component={RecipeView} />
              <Route path="/new-recipe" component={RecipeFormView} />
            </Switch>
          </main>
        </Container>
      </div>
    );
  }
}

export default App;
