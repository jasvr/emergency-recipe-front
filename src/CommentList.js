import React, { Component } from 'react';
import { Row, Col, CardPanel } from "react-materialize";




class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: ["no comments"]
        }
    }

    componentDidMount() {
        if (this.props.comments) {
            this.setState({ comments: this.props.comments })
        }

    }

    render() {
        console.log('comment List:', this.props);

        // if (!this.props.comments) {
        //     const commentsElement = "no comments to show"
        // } else {
        const commentsElement = this.state.comments.map(comment => {
            return <div>{comment}</div>
        })

        // }


        return (
            <div>
                <Col s={12} m={7}>
                    <CardPanel className="teal lighten-4 black-text">
                        <h6>User Comments</h6>
                        {commentsElement}
                    </CardPanel>
                </Col>


            </div >
        )
    }
}
export default CommentList;
