import React, { Component } from "react";
import { Row, Col, CardPanel, Icon,Button } from "react-materialize";

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
                return <div key={comment._id} >{comment.content};
                  <Icon small>insert_chart</Icon>
                  <Button key={comment._id} id='commentDelete'>
                  
                  <i class="material-icons"> delete</i>
                 </Button>
                  


                  <button key='comment._id'></button>
                </div>
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
