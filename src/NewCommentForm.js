import React, { Component } from 'react';
import { Col, Row, CardPanel } from "react-materialize";

class NewCommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      commentContent: "";
    }
  }

  render() {
    return (
      <div>
        <Col s={12} m={5}>
          <CardPanel className="pink white-text">
            <span>What's on your mind?</span>
            <Row className="recipe-form-view-inputs">
              <Input
                s={12}
                m={12}
                l={12}
                label="Name of Recipe"
                name="title"
                // value={this.state.recipe.title}
                onChange={this.handleInputChange}
              />
              </Row>

          </CardPanel>
        </Col>
      </div>
    );
  }
}

export default NewCommentForm;