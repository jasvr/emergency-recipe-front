import React, { Component } from "react";
import "./RecipeFormView.css";
import { Row, Col, Input, Chip, Tag } from "react-materialize";

class RecipeFormView extends Component {
  render() {
    return (
      <div>
        <h2>Share your recipies with the rest of the world!</h2>

        <div className="outer-form-div" s={12}>
          <Row>
            <Input
              placeholder="ex. The best lasagna ever!"
              s={12}
              label="Name of Recipe"
            />

            <Input placeholder="ex. 20 min" s={12} m={6} label="Prep Time" />
            <Input placeholder="ex. 2-3" s={12} m={6} label="Servings" />

            <Input
              placeholder="www.grilledcheese.com"
              s={12}
              label="Link to Image"
            />
          </Row>

        <Row>
            <Input
              type="textarea"
              placeholder="Please seperate each step with a comma"
              s={12}
              label="Key Ingredients"
            />




        </Row>

          <Row>
            <Input
              type="textarea"
              placeholder="Please seperate each step with a comma"
              s={12}
              
              label="Directions"
            />
          </Row>
        </div>

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

export default RecipeFormView;
