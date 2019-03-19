import React, { Component } from "react";
import { Row, CardPanel, Col, Input } from "react-materialize";
import "./RecipeView.css";

class RecipeView extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col s={12} m={5}>
            <CardPanel className="teal lighten-4 black-text">
              <span>
                <h4> Ingredients </h4>
                <Row>
                      <Input name="group1" type="checkbox" value="red" label="Red"/>
                        <Input name="group1" type="checkbox" value="red" label="Red" />

                </Row>{" "}

                <Row>
                  <Input placeholder="Placeholder" s={6} label="First Name" />
                  <Input s={6} label="Last Name" />
                  <Input s={12} label="disabled" defaultValue="I am not editable" disabled />
                  <Input type="password" label="password" s={12} />
                  <Input type="email" label="Email" s={12} />
                </Row>

                

              </span>{" "}
            </CardPanel>{" "}
          </Col>{" "}
          <Col s={12} m={5}>
            <CardPanel className="teal lighten-4 black-text">
              <span>
                <h4> Directions </h4>{" "}
              </span>{" "}
            </CardPanel>{" "}
          </Col>{" "}
        </Row>{" "}
      </div>
    );
  }
}

export default RecipeView;
