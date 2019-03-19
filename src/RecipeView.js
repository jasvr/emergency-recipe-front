import React, { Component } from "react";
import { Col, CardPanel, Row, Card, CardTitle } from "react-materialize";
import "./RecipeView.css";

class RecipeView extends Component {
  render() {
    let ingredientsArray = [
      "chicken",
      "onions",
      "peppers",
      "beans",
      "tortilla"
    ];

    let ingredientsList;
    ingredientsList = ingredientsArray.map((ingredient, id) => {
      return <li>{ingredient}</li>;
    });

    let directionsArray = ["Step 1", "Step 2", "Step 3", "Step 4", "Step 5"];

    let directionsList;

    directionsList = directionsArray.map((direction, id) => {
      return <li>{direction}</li>;
    });

    return (
      <div>
        <Row>
          <h2>Recipe</h2>
        <Card
          className="m"
          header={
            <CardTitle image="./temp_food_images/lasagna.jpg">
              Card Title
            </CardTitle>
          }
          actions={[<a href="#">Image from NY Times Cooking </a>]}
        >
          I am a very simple card. I am good at containing small bits of
            information. I am convenient because I require little markup to use
            effectively.
  
  
        <Row>
              <Col s={12} m={4}>
                <CardPanel className="teal lighten-4 black-text">
                  <h4>Ingredients</h4>
                  <ul className="ingredients-list">{ingredientsList}</ul>
                </CardPanel>
              </Col>

              <Col s={12} m={8}>
                <CardPanel className="teal lighten-4 black-text">
                  <h4> Directions</h4>
                  <ol className="direction-list">{directionsList}</ol>
                </CardPanel>
              </Col>
            </Row>





        </Card>








</Row>






        <Row>
          <Col m={3} className="grid-example">
            1
          </Col>
          <Col s={1} className="grid-example">
            4
          </Col>
          <Col s={1} className="grid-example">
            5
          </Col>
          <Col s={1} className="grid-example">
            6
          </Col>
          <Col s={1} className="grid-example">
            7
          </Col>
          <Col s={1} className="grid-example">
            8
          </Col>
          <Col s={1} className="grid-example">
            9
          </Col>
          <Col s={1} className="grid-example">
            10
          </Col>
          <Col s={1} className="grid-example">
            11
          </Col>
          <Col s={1} className="grid-example">
            12
          </Col>
        </Row>
      </div>
    );
  }
}

export default RecipeView;
