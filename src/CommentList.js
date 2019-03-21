import React, { Component } from "react";
import { Row, Col, CardPanel } from "react-materialize";

class CommentList extends Component {
  render() {
    console.log(this.props);
    let comments = this.props.recipe.comments;

    return (
      <div>
        <Col s={12} m={7}>
          <CardPanel className="teal lighten-4 black-text">
            <h6>User Comments</h6>
            {comments ? (
              comments.map(comment => {
                return <div>{comment.content}</div>;
              })
            ) : (
              <div>Loading</div>
            )}
          </CardPanel>
        </Col>
      </div>
    );
  }
}
export default CommentList;
