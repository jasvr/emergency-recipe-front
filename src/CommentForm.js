import React, { Component } from 'react';
import { Col, Input, Button, Row, CardPanel } from "react-materialize";


class CommentForm extends Component {

  render() {
    return (
      <div>
        <Col s={12} m={5}>
          <CardPanel className="teal lighten-4 black-text">
            <h4> Add a New Comment</h4>

            <div className="com-outer-div">
              <div>Let us know what you think!</div>
              <Row>
                <Input s={12} placeholder='Your comment' type='textarea' />
                <div>
                  <Button waves='light' node='a' href='http://www.google.com'> Comment </Button>
                </div>
              </Row>
            </div>
          </CardPanel>
        </Col>

      </div>
    )
  }
}
export default CommentForm;
