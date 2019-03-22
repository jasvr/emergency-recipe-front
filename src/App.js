import React, { Component } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Home from "./Home";
import Title from "./Title.js";
import { Container } from "react-materialize";
import "./App.css";
import RecipeView from "./RecipeView.js";
import RecipeFormView from "./RecipeFormView";
import Auth from "./Auth";
import axios from "axios";
import UpdateFormContainer from "./UpdateFormContainer";

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
    this.handleLogIn = this.handleLogIn.bind(this);
  }

  componentDidMount() {
    if (localStorage.token) {
      this.setState({
        isLoggedIn: true
      });
    } else {
      this.setState({
        isLoggedIn: false
      });
    }
    console.log(this.state.isLoggedIn);
  }

  handleAuthInput(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSignUp(e) {
    e.preventDefault();
    axios
      .post("https://emergency-recipe-backend.herokuapp.com/users/signup", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        localStorage.token = response.data.token;
        this.setState({ isLoggedIn: true });
      })
      .catch(err => console.log(err));
  }

  handleLogIn(e) {
    e.preventDefault();
    axios
      .post("https://emergency-recipe-backend.herokuapp.com/users/login", {
        username: this.state.username,
        password: this.state.password
      })
      .then(response => {
        localStorage.token = response.data.token;
        this.setState({ isLoggedIn: true });
        this.setState({ password: "" });
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
              <Route
                path="/recipe/update/:id"
                component={UpdateFormContainer}
              />
              <Route
                path="/recipe/:id"
                render={props => {
                  return <RecipeView {...this.state} {...props} />;
                }}
              />
              <Route path="/new-recipe" component={RecipeFormView} />
              <Route
                path="/auth"
                render={props => {
                  return (
                    <Auth
                      handleSignUp={this.handleSignUp}
                      handleLogIn={this.handleLogIn}
                      handleAuthInput={this.handleAuthInput}
                      {...props}
                      {...this.state}
                    />
                  );
                }}
              />
            </Switch>
          </main>
        </Container>
      </div>
    );
  }
}

export default App;
