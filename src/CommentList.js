import React, { Component } from "react";
import { Col, CardPanel, Button } from "react-materialize";
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
              {/* {comments ? (
                comments.map(comment => {
                  console.log(comment);
                  return (
                    <div className="eachCommDiv" key={comment._id}>
                      {comment.content}
                      <div id="buttonContainer">
                        <Button
                          id="deleteButton"
                          onClick={(this.comment._id) => this.props.onDeleteComment(comment._id)}
                          // value={comment._id}
                        >
                          <i className="material-icons" value={comment._id}>
                            {" "}
                            delete
                          </i>
                        </Button>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div>Loading...</div>
              )} */}
            </div>
          </CardPanel>
        </Col>
      </div>
    );
  }
}
export default CommentList;
