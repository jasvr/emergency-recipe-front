import React, { Component } from "react";
import IngredientChips from "./IngredientChips";
import './UpdateFormContainer.css';
import UpdateForm from "./UpdateForm";

class UpdateFormView extends Component {
  constructor(props){
    super(props);
    this.state = {
      recipe: undefined
    }
  }


  componentDidMount(){
    fetch("https://emergency-recipe-backend.herokuapp.com/api/recipe/" + this.props.match.params.id)
      .then(res => res.json())
      .then(res => {
        this.setState({
          recipe: res
        })
        // console.log(this.state.recipe);
      })
      .catch(err => {
        console.log("Error: ", err);
      })
  }

  render() {

    return (
      <div>
        <p>Updating {this.props.match.params.id}</p>
        {this.state.recipe ? <UpdateForm recipe={this.state.recipe} {...this.props} /> : <p>Loading...</p>}
      </div>
    );
  }
}

export default UpdateFormView;
