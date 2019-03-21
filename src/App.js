import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import Title from "./Title.js";
import { Container } from "react-materialize";
import "./App.css";
import RecipeView from "./RecipeView.js";
import RecipeFormView from "./RecipeFormView";
import Auth from './Auth';
import UpdateFormView from "./UpdateFormView";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <main>
            <div className="title">
              <Link to="/">
                <Title />
              </Link>
            </div>

            <div className="link-box">
              <Link to="/new-recipe" className="link-box-link">
                Submit a Recipe
              </Link>
              <span>&nbsp;|&nbsp;</span>
              <Link to="/auth" className="link-box-link">Auth</Link>
            </div>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/recipe" component={RecipeView} />
              <Route path="/new-recipe" component={RecipeFormView} />
<<<<<<< HEAD
              <Route path="/auth" component={Auth} />
              <Route path="/recipe/:id/update" component={UpdateFormView} />
=======
              {/* <Route path="/auth" component={Auth} /> */}
>>>>>>> master
            </Switch>
          </main>
        </Container>
      </div>
    );
  }
}

export default App;
