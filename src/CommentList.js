import React, { Component } from "react";
import { Row, Col, CardPanel, Icon, Button } from "react-materialize";

class CommentList extends Component {
  constructor() {
    super()
    this.handleDelete = this.handleDelete.bind(this)
  }
  handleDelete(event) {
    console.log(event.target)
  }


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
                console.log(comment)
                return (<div key={comment._id} >{comment.content};
                  <Button onClick={this.props.onDeleteComment} value={comment._id} >

                    <i className="material-icons" value={comment._id}> delete</i>
                  </Button>

                  <button ></button>
                </div>)
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
