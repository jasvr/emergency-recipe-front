import React, { Component } from "react";
import { Row, Col, CardPanel, Button } from "react-materialize";

class CommentItem extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    let commentID = this.props.comment._id;
    let apiURL =
      "https://emergency-recipe-backend.herokuapp.com/api/comment/" + commentID;
    fetch(apiURL, {
      method: "DELETE"
    })
      .then(res => {
        res.json();
      })
      .then(res => {
        this.props.getData();
      })
      .catch(err => {
        console.log("Error: ", err);
      });
  }

  render() {
    return (
      <div>
        <Row>
          <Col s={12} m={12}>
            <CardPanel className="pink white-text">
              <span>{this.props.comment.content}</span>
              <br />
              <Button waves="light" onClick={this.handleDelete}>
                Delete
              </Button>
            </CardPanel>
          </Col>
        </Row>
      </div>
    );
  }
}

export default CommentItem;
