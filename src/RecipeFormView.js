import React, { Component } from "react";
import "./RecipeFormView.css";
import IngredientChips from './IngredientChips';
import { Row, Col, Card, Input } from "react-materialize";

class RecipeFormView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      keyIngredients: [],
      servings: "",
      prepTime: "",
      picture: "",
      instructions: "",
      isApproved: true,
      comments: []
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(e) {
    // console.log("Input change being called.")
    const target = e.target;
    const value = target.value;
    const name = target.name;


    this.setState({
      [name]: value
    });
  }

  handleSubmit(e) {
    // TK
  }

  render() {
    return (
      <div>
        <Row className="auth-form-container">
          <Col l={12} m={12} s={12}>
            <Card
              className="login-form-box"
              textClassName="white-text"
              title="Share your recipe with the world!"
              actions={[
                <a id="authenticate-link" href="/">
                  Add Your Recipe
                </a>
              ]}
            >
              <Row className="recipe-form-view-inputs">
                <Input
                  s={12}
                  m={12}
                  l={12}
                  label="Name of Recipe"
                  name="title"
                  value={this.state.title}
                  onChange={this.handleInputChange}
                />

                <Input
                  s={12}
                  m={6}
                  l={6}
                  label="Prep Time"
                  name="prepTime"
                  value={this.state.prepTime}
                  onChange={this.handleInputChange}
                />

                <Input
                  s={12}
                  m={6}
                  l={6}
                  label="Servings"
                  name="servings"
                  value={this.state.servings}
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
                  value={this.state.picture}
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
                  value={this.state.instructions}
                  onChange={this.handleInputChange}
                />
              </Row>

              {/* <IngredientChips /> */}

              <Row className="recipe-form-view-inputs">
                <Input
                  s={12}
                  m={12}
                  l={12}
                  label="Key Ingredient Tags"
                  name="keyIngredients"
                  value={this.state.keyIngredients}
                  onChange={this.handleInputChange}
                />
              </Row>
            </Card>
          </Col>
        </Row>

        {/* <div className="outer-form-div" s={12}>
          

          <Row>
            <Input
              type="textarea"
              placeholder="Please seperate each step with a comma"
              s={12}
              label="Key Ingredients"
            />
          </Row>

          <Row>
            <Input
              type="textarea"
              placeholder="Please seperate each step with a comma"
              s={12}
              label="Directions"
            />
          </Row>

          <div>
            <Button waves="light" node="a" href="http://www.google.com">
              {" "}
              Submit{" "}
            </Button>
          </div>
        </div> */}
      </div>
    );
  }
}

export default RecipeFormView;
