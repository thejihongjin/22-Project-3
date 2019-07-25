import React, { Component } from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";


class UserReview extends Component {
    state = {
        user: "",
        attendees: [],
        reviews: ""
    }

    jumbotronStyle = {
        textAlign: "center",
        margin: "25px"
    }

    cardStyle = {
        margin: "15px"
    }

    render() {
        return (
            <div style={{ margin: "0 auto" }}>
                {/* navbar - HOME/OTHER NAV LINKS */}
                {/* header - REVIEW */}
                <Jumbotron style={this.jumbotronStyle}>
                    <h1>Review</h1>
                </Jumbotron>
                {/* user cards(s) w/ review, punctuality rating, comment, etc */}
                {/* map over attendees in event and create card for each one */}
                <Card style={this.cardStyle}>
                    <Card.Body>
                        <Card.Title>User1</Card.Title>
                        <Card.Text>Rating bar</Card.Text>
                        <Form>
                            <Form.Group controlId="formBookSearch">
                                <Form.Label>Comments</Form.Label>
                                <Form.Control as="textarea" rows="3" name="userIdComment"/>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
                <Card style={this.cardStyle}>
                    <Card.Body>
                        <Card.Title>User2</Card.Title>
                        <Card.Text>Rating bar</Card.Text>
                        <Form>
                            <Form.Group controlId="formBookSearch">
                                <Form.Label>Comments</Form.Label>
                                <Form.Control as="textarea" rows="3" name="userIdComment"/>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
                <Card style={this.cardStyle}>
                    <Card.Body>
                        <Card.Title>User3</Card.Title>
                        <Card.Text>Rating bar</Card.Text>
                        <Form>
                            <Form.Group controlId="formBookSearch">
                                <Form.Label>Comments</Form.Label>
                                <Form.Control as="textarea" rows="3" name="userIdComment"/>
                            </Form.Group>
                        </Form>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default UserReview;