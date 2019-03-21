import React, { Component } from "react";
import IngredientChips from "./IngredientChips";
import './UpdateFormView.css';
import { Row, Col, Card, Input, Button } from "react-materialize";

class UpdateFormView extends Component {
  render() {
    console.log(this.props);

    return (
      <div>
        <p>Updating {this.props.match.params.id}</p>
        <Row className="update-form-container">
          <Col l={12} m={12} s={12}>
            <Card
              className="update-form-box"
              textClassName="white-text"
              title="Share your recipe with the world!"
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
                  // value={this.state.recipe.title}
                  onChange={this.handleInputChange}
                />

                <Input
                  s={12}
                  m={6}
                  l={6}
                  label="Prep Time"
                  name="prepTime"
                  // value={this.state.recipe.prepTime}
                  onChange={this.handleInputChange}
                />

                <Input
                  s={12}
                  m={6}
                  l={6}
                  label="Servings"
                  name="servings"
                  // value={this.state.recipe.servings}
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
                  // value={this.state.recipe.picture}
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
                  // value={this.state.recipe.instructions}
                  onChange={this.handleInputChange}
                />
              </Row>

              {/* <IngredientChips ingredients={this.state.keyIngredients} /> */}

              <Row className="recipe-form-view-inputs">
                <Input
                  s={12}
                  m={12}
                  l={12}
                  label="Key Ingredient Tags"
                  name="keyIngredients"
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

export default UpdateFormView;
