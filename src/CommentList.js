import React, { Component } from "react";
import { Row, Col, CardPanel } from "react-materialize";

class CommentList extends Component {
  render() {
    // const recipeComments = this.props.recipe.comments.map(comment => {
    //     return <div>{comment}</div>
    // })
    // console.log("comment list", this.state.comments)
    // const comments = this.state.comments
    // console.log(comments, "yay!")
    // const commentsElement = comments.map(comment => {
    //     return <div>{comment}</div>
    // })

    // }
    console.log("comment list", this.props);
    const commentList = this.props.recipe.comments.map(comment => {
      return <p>{comment.content}</p>;
    });
    return (
      <div>
        <Col s={12} m={7}>
          <CardPanel className="teal lighten-4 black-text">
            <h6>User Comments</h6>
            {commentList}
          </CardPanel>
        </Col>
      </div>
    );
  }
}
export default CommentList;
