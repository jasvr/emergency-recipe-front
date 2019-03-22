import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import { Row, Col, Card, Input, Button } from "react-materialize";
import IngredientChips from './IngredientChips';

const API_URL = "https://emergency-recipe-backend.herokuapp.com/api/recipe/";
let shouldRedirect = false;

class UpdateForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: props.recipe.title,
      keyIngredients: props.recipe.keyIngredients,
      servings: props.recipe.servings,
      prepTime: props.recipe.prepTime,
      picture: props.recipe.picture,
      instructions: props.recipe.instructions,
      isApproved: true,
      comments: props.recipe.comments
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.tokenizeStringIntoArray = this.tokenizeStringIntoArray.bind(this);
    this.uppercaseFirstLetterArray = this.uppercaseFirstLetterArray.bind(this);
  }

  handleInputChange(e) {
    e.preventDefault();
    const target = e.target;
    let value = target.value;
    const name = target.name;
    if (name === "keyIngredients") {
      let tokenizedArray = this.tokenizeStringIntoArray(value);
      tokenizedArray = this.uppercaseFirstLetterArray(tokenizedArray);
      value = tokenizedArray;
    }
    this.setState({
      [name]: value
    });
  }

  tokenizeStringIntoArray(stringToBeTokenized) {
    let tokenArray = stringToBeTokenized.match(/\S+/g);
    return tokenArray;
  }

  uppercaseFirstLetterArray(arrayArg) {
    let fixedArray = [];

    if (arrayArg !== null) {
      for (let i = 0; i < arrayArg.length; i++) {
        let currentWord = arrayArg[i];
        fixedArray.push(currentWord.charAt(0).toUpperCase() + currentWord.slice(1));
      }
      return fixedArray;
    } else {
      return arrayArg;
    }
  }


  handleSubmit(e) {
    e.preventDefault();
    fetch((API_URL + this.props.match.params.id), {
      method: "PUT",
      body: JSON.stringify(this.state),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        console.log("Message from API: ", res);
        shouldRedirect = true;
      })
      .then(()=>{
        this.forceUpdate();
      })
      .catch(err => {
        console.log("Error: ", err);
      })
  }

  render() {
    if (shouldRedirect){
      return <Redirect to={"/recipe/" + this.props.match.params.id} />
    }
    
    return (
      <div>
        <Row className="update-form-container">
          <Col l={12} m={12} s={12}>
            <Card
              className="update-form-box"
              textClassName="white-text"
              title="Fix this thing."
              actions={[
                <Button
                  waves="light"
                  className="pink"
                  onClick={this.handleSubmit}
                >
                  Submit
                </Button>
              ]}
            >
              <Row className="recipe-form-view-inputs">
                <Input
                  s={12}
                  m={12}
                  l={12}
                  label="Name of Recipe"
                  name="title"
                  // value={this.state.title}
                  defaultValue={this.state.title}
                  onChange={this.handleInputChange}
                />

                <Input
                  s={12}
                  m={6}
                  l={6}
                  label="Prep Time"
                  name="prepTime"
                  defaultValue={this.state.prepTime}
                  onChange={this.handleInputChange}
                />

                <Input
                  s={12}
                  m={6}
                  l={6}
                  label="Servings"
                  name="servings"
                  defaultValue={this.state.servings}
                  onChange={this.handleInputChange}
                />
              </Row>

              <Row className="recipe-form-view-inputs">
                <Input
                  s={12}
                  m={12}
                  l={12}
                  label="Image URL"
                  name="picture"
                  defaultValue={this.state.picture}
                  onChange={this.handleInputChange}
                />
              </Row>

              <Row className="recipe-form-view-inputs">
                <Input
                  s={12}
                  m={12}
                  l={12}
                  type="textarea"
                  label="Instructions"
                  name="instructions"
                  defaultValue={this.state.instructions}
                  onChange={this.handleInputChange}
                />
              </Row>

              <IngredientChips ingredients={this.state.keyIngredients} />

              <Row className="recipe-form-view-inputs">
                <Input
                  s={12}
                  m={12}
                  l={12}
                  label="Key Ingredient Tags"
                  name="keyIngredients"
                  //  defaultValue={this.state.keyIngredients}
                  onChange={this.handleInputChange}
                />
              </Row>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}

export default UpdateForm;