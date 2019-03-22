import React, { Component } from "react";
import { Col, CardPanel } from "react-materialize";
import CommentItem from "./CommentItem";
import "./CommentList.css";

class CommentList extends Component {
  constructor() {
    super();
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete(event) {
    console.log(event.target);
  }

  render() {
    let comments = this.props.recipe.comments;
    let commentItemComponents = [];

    if (this.props.recipe.comments){
      commentItemComponents = comments.map((comment, id) => {
        return (<CommentItem comment={comment} key={id} {...this.props} />)
      })
    }

    

    return (
      <div>
        <Col s={12} m={7}>
          <CardPanel className="teal lighten-4 black-text">
            <h4>User Comments</h4>
            <div className="commentContainer">
            {commentItemComponents}
            </div>
          </CardPanel>
        </Col>
      </div>
    );
  }
}
export default CommentList;
