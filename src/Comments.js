import React, { Component } from "react";
import { Col } from "react-materialize";
import "./RecipeView.css";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";
import axios from "axios";

const API_URL = "https://emergency-recipe-backend.herokuapp.com/api/comment";

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      content: ""
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onInputChange = this.onInputChange.bind(this);
    this.onDeleteComment = this.onDeleteComment.bind(this);
  }

  onInputChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  onSubmit(event) {
    event.preventDefault();
    let commentPath = this.props.location.pathname;
    if (this.props.isLoggedIn) {
      axios.post(API_URL + commentPath, this.state).then(res => {
        this.props.getData();
      });
    } else {
      alert("Please log in or create a new account!");
    }
  }

  onDeleteComment(event) {
    event.preventDefault();
    console.log(this.props.isLoggedIn);
    if (this.props.isLoggedIn) {
      let commentId = event.target.value;
      axios.delete(API_URL + "/" + commentId).then(res => {
        console.log("deleted", res);
        this.props.getData();
        this.forceUpdate();
      });
    } else {
      alert("Please log in or create a new account!");
    }
  }

  render() {
    return (
      <div>
        <Col s={12} m={12}>
          <h2>Comments</h2>
          <CommentForm
            {...this.state}
            {...this.props}
            handleUpdateRecipe={this.handleUpdateRecipe}
            onSubmit={this.onSubmit}
            onInputChange={this.onInputChange}
          />
          <CommentList
            onDeleteComment={this.onDeleteComment}
            {...this.state}
            {...this.props}
          />
        </Col>
      </div>
    );
  }
}
export default Comments;
