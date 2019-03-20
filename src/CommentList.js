import React, { Component } from 'react';
import {Col,CardPanel } from "react-materialize";


class CommentList extends Component {
    render() {
        return (
            <div>
                <Col s={12} m={7}>
                    <CardPanel className="teal lighten-4 black-text">
                        <h4> User Comments</h4>
                    </CardPanel>
                </Col>


            </div>
        )
    }
}
export default CommentList;
