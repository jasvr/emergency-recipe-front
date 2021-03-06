import React, { Component } from "react";
import { Link } from "react-router-dom";
import Comments from "./Comments";
import "./RecipeView.css";
import {
  Col,
  CardPanel,
  Row,
  Card,
  CardTitle,
  Button
} from "react-materialize";

class RecipeView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recipe: {}
    };
    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    let recipeID = this.props.match.params.id;
    const API_URL =
      "https://emergency-recipe-backend.herokuapp.com/api/recipe/";
    fetch(API_URL + recipeID)
      .then(res => res.json())
      .then(res => {
        this.setState({
          recipe: res
        });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const selectedRecipe = this.state.recipe;

    if (selectedRecipe.picture) {
      return (
        <div>
          <Card
            className="recipe-view-card"
            id="recipe-view"
            header={
              <CardTitle image={selectedRecipe.picture}>
                {selectedRecipe.title}
              </CardTitle>
            }
            actions={[
              <Link
                key={"update-recipe-link"}
                to={"/recipe/update/" + this.state.recipe._id}
              >
                <Button waves="light" className="pink">
                  Update this Recipe
                </Button>
              </Link>
            ]}
          >
            <Row>
              <Col s={12} m={5} offset="l1 m1">
                <CardPanel className="recipe-box">
                  <span>
                    <b>Prep Time:</b> {selectedRecipe.prepTime}
                  </span>
                </CardPanel>
              </Col>
              <Col s={12} m={5}>
                <CardPanel className="recipe-box">
                  <span>
                    <b>Servings:</b> {selectedRecipe.servings}
                  </span>
                </CardPanel>
              </Col>
            </Row>

            <Row>
              {/* come back and map  */}
              <Col s={12} m={4}>
                <CardPanel className="recipe-box">
                  <h5>Key Ingredients:</h5>
                  {selectedRecipe.keyIngredients !== undefined ? (
                    selectedRecipe.keyIngredients.map((ingredient, id) => {
                      return (
                        <p className="ingredient-item" key={id}>
                          {ingredient}
                        </p>
                      );
                    })
                  ) : (
                    <p>Loading...</p>
                  )}
                </CardPanel>
              </Col>

              <Col s={12} m={8}>
                <CardPanel className="recipe-box">
                  <h5>Directions</h5>
                  <p className="direction-text">
                    {selectedRecipe.instructions}
                  </p>
                </CardPanel>
              </Col>
            </Row>
            <Row>
              <Comments
                {...this.state}
                {...this.props}
                getData={this.getData}
              />
            </Row>
          </Card>
        </div>
      );
    } else {
      return <p>Loading...</p>;
    }
  }
}

export default RecipeView;
