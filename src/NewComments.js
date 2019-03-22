import React, { Component } from 'react';
import { Col } from "react-materialize";
import NewCommentList from "./NewCommentList";
import NewCommentForm from "./NewCommentForm";

class NewComments extends Component {
  render() {
    return (
      <div>
        <p>Test 123</p>
        <Col s={12} m={12}>
          <NewCommentForm />
          <NewCommentList />
        </Col>
      </div>
    );
  }
}

export default NewComments;