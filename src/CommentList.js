import React, { Component } from 'react';
import { Row, Col, CardPanel } from "react-materialize";

// TB DELETED
let fakeComments = [
    {
        name: "Jasmin",
        content: "I love pizza!"
    },
    {
        name: "Yoshi",
        content: "I love kababs!"
    },
    {
        name: "Liz",
        content: "I love nachos!"
    },
    {
        name: "Paul",
        content: "I love yogurt!"
    }
]
// END TB DELETED



class CommentList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comments: undefined
        }
    }

    componentDidMount() {
        // DO API CALL HERE

        // FAKE API CALL
        this.setState({
            comments: fakeComments
        })

    }

    render() {
        console.log(this.state.comments);

        return (
            <div>
                <Col s={12} m={7}>
                    <CardPanel className="teal lighten-4 black-text">
                        <h6>User Comments</h6>
                    </CardPanel>
                </Col>


            </div>
        )
    }
}
export default CommentList;
