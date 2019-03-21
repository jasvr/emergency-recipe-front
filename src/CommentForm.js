import React, { Component } from 'react';
import { Col, Input, Button, Row, CardPanel } from "react-materialize";



class CommentForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      comment: "",
    }

    this.onSubmit = this.onSubmit.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleInputChange(event) {

    this.setState({
      [event.target.name]: event.target.value
    });
  }
  onSubmit(event) {
    event.preventDefault()
    let commentPath = this.props.location.pathname;
    const API_URL = 'https://emergency-recipe-backend.herokuapp.com/api/comment'
    const commentInput = this.state.comment
    // fetch(API_URL + commentPath, {
    //   method: "POST",
    //   cache: "no-cache",
    //   body: JSON.stringify(commentInput),
    //   headers:{
    //     "Content-Type": "application/json"
    //   }
    // } 


    console.log(event.target)

  }
  render() {
    console.log("ComForm", this.props)


    return (
      <div>
        <Col s={12} m={5}>
          <CardPanel className="teal lighten-4 black-text">
            <h4> Add a New Comment</h4>

            <div className="com-outer-div">
              <div>Let us know what you think!</div>
              <Row>
                <Input name="comment" s={12} placeholder='Your comment' type='textarea' onChange={this.handleInputChange} />
                <div>
                  <Button onClick={this.onSubmit} waves='light' node='a' href='http://www.google.com'> Comment </Button>
                </div>
              </Row>
            </div>
          </CardPanel>
        </Col>

      </div>
    )
  }
}
export default CommentForm;
