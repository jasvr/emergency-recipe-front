import React, { Component } from "react";
import { Col, Input, Button, Row, CardPanel } from "react-materialize";
import "./CommentForm.css";

class CommentForm extends Component {
  render() {
    return (
      <div>
        <Col s={12} m={5}>
          <CardPanel className="teal lighten-4 black-text">
            <h4> Add a New Comment</h4>

            <div className="com-outer-div">
              <div>Let us know what you think!</div>
              <Row className="user-form-input">
                <div className="comment-container">
                  <Input
                    s={12}
                    m={12}
                    l={12}
                    label="Your Comment"
                    name="content"
                    // type="textarea"
                    onChange={this.props.onInputChange}
                  />
                </div>
                <div>
                  <Button
                    onClick={this.props.onSubmit}
                    waves="light"
                    node="a"
                    href="http://www.google.com"
                  >
                    Comment
                  </Button>
                </div>
              </Row>
            </div>
          </CardPanel>
        </Col>
      </div>
    );
  }
}
export default CommentForm;
