import React, { Component } from "react";
import { Link } from "react-router-dom";
import NewComments from "./NewComments";
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
    console.log("Getting");
  }

  getData() {
    let recipeID = this.props.match.params.id;
    console.log("Recipe Path: ", recipeID);
    const API_URL =
      "https://emergency-recipe-backend.herokuapp.com/api/recipe/";
    fetch(API_URL + recipeID)
      .then(res => res.json())
      .then(res => {
        this.setState({
          recipe: res
        });
        console.log("got data", this.state);
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const selectedRecipe = this.state.recipe;
    console.log(this.props);

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
            <Link to={"/recipe/update/" + this.state.recipe._id}>
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
                    return <p className="ingredient-item">{ingredient}</p>;
                  })
                ) : (
                  <p>Loading...</p>
                )}
              </CardPanel>
            </Col>

            <Col s={12} m={8}>
              <CardPanel className="recipe-box">
                <h5>Directions</h5>
                <p className="direction-text">{selectedRecipe.instructions}</p>
              </CardPanel>
            </Col>
          </Row>
          <Row>
            <NewComments {...this.state} {...this.props} getData={this.getData} />
          </Row>
        </Card>
      </div>
    );
  }
}

export default RecipeView;
