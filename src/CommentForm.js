import React, { Component } from "react";
import { Col, Input, Button, Row, CardPanel } from "react-materialize";
import axios from "axios";

class CommentForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "placeholder",
      content: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  render() {
    return (
      <div>
        <Col s={12} m={5}>
          <CardPanel className="teal lighten-4 black-text">
            <h4> Add a New Comment</h4>

            <div className="com-outer-div">
              <div>Let us know what you think!</div>
              <Row>
                <Input
                  name="content"
                  s={12}
                  placeholder="Your comment"
                  type="textarea"
                  onChange={this.handleInputChange}
                />
                <div>
                  <Button
                    onClick={this.onSubmit}
                    waves="light"
                    node="a"
                    href="http://www.google.com"
                  >
                    {" "}
                    Comment{" "}
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
