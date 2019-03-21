import React, { Component } from "react";
import Comments from "./Comments";
import { Col, CardPanel, Row, Card, CardTitle } from "react-materialize";
import "./RecipeView.css";

class RecipeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {}
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
    console.log("Getting");
  }

  getData() {
    let recipePath = this.props.location.pathname;
    const API_URL = "https://emergency-recipe-backend.herokuapp.com/api";
    fetch(API_URL + recipePath)
      .then(res => res.json())
      .then(res => {
        this.setState({
          recipe: res
        });
        console.log("got data", this.state);
      });
  }

  render() {
    const selectedRecipe = this.state.recipe;
    return (
      <div>
        <Row>
          <Card
            className="m"
            header={
              <CardTitle image={selectedRecipe.picture}>
                {selectedRecipe.title}
              </CardTitle>
            }
            actions={[<a href="www.google.com">Back to Search Page </a>]}
          >
            <Row>
              <Col>
                <p className="prep-time">
                  Prep Time: {selectedRecipe.prepTime}
                </p>
              </Col>
              <Col>
                <p className="serving">Servings: {selectedRecipe.servings}</p>
              </Col>
            </Row>

            <Row>
              {/* come back and map  */}
              <Col s={12} m={4}>
                <CardPanel className="teal lighten-4 black-text">
                  <h4>Key Ingredients:{selectedRecipe.keyIngredients}</h4>
                  <ul className="ingredients-list">ingredientsList</ul>
                </CardPanel>
              </Col>

              <Col s={12} m={8}>
                <CardPanel className="teal lighten-4 black-text">
                  <h4> Directions</h4>
                  <ol className="direction-list">
                    {selectedRecipe.instructions}
                  </ol>
                </CardPanel>
              </Col>
            </Row>
            <Row>
              <Comments
                {...this.state}
                {...this.props}
                getData={this.getData}
              />
            </Row>
          </Card>
        </Row>
      </div>
    );
  }
}

export default RecipeView;
