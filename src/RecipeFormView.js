import React, { Component } from "react";
import "./RecipeFormView.css";
import { Row, Col, Card, Input } from "react-materialize";

class RecipeFormView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: undefined,
      keyIngredients: [],
      servings: undefined,
      prepTime: undefined,
      picture: undefined,
      instructions: undefined,
      isApproved: true,
      comments: []
    };
  }

  handleInputChange(e) {
    // TK
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
                  Authenticate Me
                </a>
              ]}
            >
              <Row>
                <Input
                  placeholder="ex. The best lasagna ever!"
                  s={12}
                  label="Name of Recipe"
                />

                <Input
                  placeholder="ex. 20 min"
                  s={12}
                  m={6}
                  label="Prep Time"
                />
                <Input placeholder="ex. 2-3" s={12} m={6} label="Servings" />

                <Input
                  placeholder="www.grilledcheese.com"
                  s={12}
                  label="Link to Image"
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
