import React, { Component } from "react";
import { Col } from "react-materialize";
import "./RecipeView.css";
import CommentList from "./CommentList";
import CommentForm from "./CommentForm";

class Comments extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: { comments: ["placeholder"] }
    };
    this.handleUpdateRecipe = this.handleUpdateRecipe.bind(this);
  }

  componentDidMount() {
    let recipePath = this.props.location.pathname;
    const API_URL = "https://emergency-recipe-backend.herokuapp.com/api";
    fetch(API_URL + recipePath)
      .then(res => res.json())
      .then(res => {
        this.setState({
          recipe: res
        });
        console.log("got comment data", this.state);
      });
    // this.setState({ comments: this.props.recipe.comments });
  }

  handleUpdateRecipe(value) {
    this.setState({
      recipe: {
        comments: value
      }
    });
  }

  render() {
    // console.log("comments state", this.state);
    return (
      <div>
        <Col s={12} m={12}>
          <h4>Comments</h4>
          <CommentForm
            {...this.state}
            {...this.props}
            handleUpdateRecipe={this.handleUpdateRecipe}
          />
          <CommentList {...this.state} />
        </Col>
      </div>
    );
  }
}
export default Comments;
