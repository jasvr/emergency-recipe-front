import React, { Component } from "react";
import './IngredientChips.css';
import { Row, Chip } from "react-materialize";

class IngredientChips extends Component {
  render() {
    let ChipItems;
    if (this.props.ingredients !== null){
      ChipItems = this.props.ingredients.map((ingredient, id) => {
        return (
          <Chip key={id}>{ingredient}</Chip>
        );
      });
    }

    return (
      <div>
        <Row>
          {ChipItems}
        </Row>
      </div>
    );
  }
}

export default IngredientChips;
