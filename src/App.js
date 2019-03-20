import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import Title from "./Title.js";
import { Container } from "react-materialize";
import "./App.css";
import RecipeView from "./RecipeView.js";
import RecipeFormView from "./RecipeFormView";
import Auth from "./Auth";
git;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isLoggedIn: false
    };
    this.handleAuthInput = this.handleAuthInput.bind(this);
    this.handleSignUp = this.handleSignUp.bind(this);
  }

  handleAuthInput(e) {
    this.setState({
      [e.target.username]: e.target.value
    });
  }

  handleSignUp(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3001/users/signup", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        localStorage.token = response.data.token;
        this.setState({ isLoggedIn: true });
      })
      .catch(err => console.log(err));
  }

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
              <Link to="/auth" className="link-box-link">
                Auth
              </Link>
            </div>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/recipe" component={RecipeView} />
              <Route path="/new-recipe" component={RecipeFormView} />
              <Route path="/auth" component={Auth} />
            </Switch>
          </main>
        </Container>
      </div>
    );
  }
}

export default App;
