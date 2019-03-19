import React, { Component } from "react";
import { Col, CardPanel, Row, Input } from "react-materialize";
import "./RecipeView.css";

class RecipeView extends Component {
  render() {
    return (
      <div>
        <Row>
          <h2>Recipe</h2>
        </Row>
        <Row>
          <Col s={8} m={3}>
            <CardPanel className="teal lighten-4 black-text">
              <h4>Ingredients</h4>
              <Row>
                <Input name="group1" type="checkbox" value="red" label="Red" />
              </Row>
              <Row>
                <Input name="group1" type="checkbox" value="red" label="Red" />
              </Row>
              <Row>
                <Input name="group1" type="checkbox" value="red" label="Red" />
              </Row>
              <Row>
                <Input name="group1" type="checkbox" value="red" label="Red" />
              </Row>
            </CardPanel>
          </Col>

          <Col s={12} m={5}>
            <CardPanel className="teal lighten-4 black-text">
              <h4> Directions</h4>
              <Row>
                <Row m={12} className="grid-example">
                  3<p>First Step</p>
                  <p>Second Step</p>
                </Row>
              </Row>
              <Row>
                <Input name="group1" type="checkbox" value="red" label="Red" />
              </Row>
              <Row>
                <Input name="group1" type="checkbox" value="red" label="Red" />
              </Row>
              <Row>
                <Input name="group1" type="checkbox" value="red" label="Red" />
              </Row>
            </CardPanel>
          </Col>
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
