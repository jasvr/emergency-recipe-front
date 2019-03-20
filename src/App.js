import React, { Component } from "react";
import Home from "./Home";
import Title from "./Title.js";
import { Container } from "react-materialize";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container>
          <main>
            <div className="title">
              <Title />
            </div>
            <div>
              <Home />
            </div>
          </main>
        </Container>
      </div>
    );
  }
}

export default App;
