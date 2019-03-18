import React, { Component } from "react";
import { Card, CardTitle, Row, CardPanel, Col, Input } from "react-materialize";

class RecipeView extends Component {
  render() {
    return (
      <div>
        <Card
          className="small"
          header={
            <CardTitle image="/temp_food_images/lasagna.jpg">
              Card Title
            </CardTitle>
          }
          actions={[<a href="#">This is a Link</a>]}
        >
          I am a very simple card. I am good at containing small bits of
          information. I am convenient because I require little markup to use
          effectively.
        </Card>

        <Row>
          <Col s={12} m={5}>
            <CardPanel className="teal lighten-4 black-text">
              <span>
                <h4>Ingredients</h4>

                <Row>
                  <Input
                    name="group1"
                    type="checkbox"
                    value="red"
                    label="Red"
                  />
                  <Input
                    name="group1"
                    type="checkbox"
                    value="red"
                    label="Red"
                  />

                  <Input
                    name="group1"
                    type="checkbox"
                    value="red"
                    label="Red"
                  />
                  <Input
                    name="group1"
                    type="checkbox"
                    value="red"
                    label="Red"
                  />
                  <Input
                    name="group1"
                    type="checkbox"
                    value="red"
                    label="Red"
                  />
                  <Input
                    name="group1"
                    type="checkbox"
                    value="red"
                    label="Red"
                  />

                  <Input
                    name="group1"
                    type="checkbox"
                    value="yellow"
                    label="Yellow"
                    defaultValue="checked"
                  />
                </Row>
              </span>
            </CardPanel>
          </Col>
          <Col s={12} m={5}>
            <CardPanel className="teal lighten-4 black-text">
              <span>
                <h4>Directions</h4>
              </span>
            </CardPanel>
          </Col>
        </Row>
      </div>
    );
  }
}

export default RecipeView;
