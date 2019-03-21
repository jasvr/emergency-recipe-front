import React, { Component } from 'react';
import { Row, Col, CardPanel } from "react-materialize";




class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: this.props.recipe.comments
        }
    }

    componentDidMount() {
        this.props.getData()
        this.setState({ comments: this.props.comments })
    }
    render() {
        // const recipeComments = this.props.recipe.comments.map(comment => {
        //     return <div>{comment}</div>
        // })
        // console.log("comment list", this.state.comments)
        // const comments = this.state.comments
        // console.log(comments, "yay!")
        // const commentsElement = comments.map(comment => {
        //     return <div>{comment}</div>
        // })

        // }


        return (
            <div>
                <Col s={12} m={7}>
                    <CardPanel className="teal lighten-4 black-text">
                        <h6>User Comments</h6>
                        recipeComments
                    </CardPanel>
                </Col>


            </div >
        )
    }
}
export default CommentList;
