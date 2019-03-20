import React, { Component } from "react";
import {
  Col,
  CardPanel,
  Row,
  Card,
  CardTitle,
  Pagination
} from "react-materialize";
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
          <Card
            className="m"
            header={
              <CardTitle image="./temp_food_images/lasagna.jpg">
                Recipe Title
              </CardTitle>
            }
            actions={[<a href="#">Image from NY Times Cooking </a>]}
          >
            <Row>
              <Col>
                <p className="prep-time">Prep Time:</p>
              </Col>
              <Col>
                <p className="serving">Servings:</p>
              </Col>
            </Row>

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
                  <Pagination items={10} activePage={2} maxButtons={8} />
                </CardPanel>
              </Col>
            </Row>
            <Row>
              <Col s={12} m={12}>
                <h4> Comments</h4>
              </Col>
            </Row>
            <Row>
              <Col s={12} m={5}>
                <CardPanel className="teal lighten-4 black-text">
                  <h4> Add a New Comment</h4>
                </CardPanel>
              </Col>

              <Col s={12} m={7}>
                <CardPanel className="teal lighten-4 black-text">
                  <h4> User Comments</h4>
                </CardPanel>
              </Col>
            </Row>
          </Card>
        </Row>
        <Row>
          <Col m={1} className="grid-example">
            1
          </Col>

          <Col m={1} className="grid-example">
            2
          </Col>
          <Col m={1} className="grid-example">
            3
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
