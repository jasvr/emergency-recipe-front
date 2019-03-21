import React, { Component } from 'react';
import { Col } from "react-materialize";
import "./RecipeView.css";
import CommentList from './CommentList';
import CommentForm from './CommentForm';


class Comments extends Component {
    componentDidMount() {
    }
    render() {
        console.log("in main comments",this.props)
        return (
            <div>
                <Col s={12} m={12}>
                    <h4>Comments</h4>
                    <CommentForm />
                    <CommentList {...this.props} />
                    
                </Col>
            </div>
        );
    }
}
export default Comments;
