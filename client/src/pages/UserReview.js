import React from 'react';
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";


function UserReview() {
    const jumbotronStyle = {
        textAlign: "center",
        margin: "25px"
    }

    const cardStyle = {
        margin: "15px"
    }

    return (
        <div style={{ margin: "0 auto" }}>
            {/* navbar - HOME/OTHER NAV LINKS */}
            {/* header - REVIEW */}
            <Jumbotron style={jumbotronStyle}>
                <h1>Review</h1>
            </Jumbotron>
            {/* user cards(s) w/ review, punctuality rating, comment, etc */}
            {/* map over attendees in event and create card for each one */}
            <Card style={cardStyle}>
                <Card.Body>
                    <Card.Title>User1</Card.Title>
                    <Card.Text>Rating bar</Card.Text>
                    <Form>
                        <Form.Group controlId="formUserReview">
                            <Form.Label>Comments</Form.Label>
                            <Form.Control as="textarea" rows="3" name="userIdComment" />
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
            <Card style={cardStyle}>
                <Card.Body>
                    <Card.Title>User2</Card.Title>
                    <Card.Text>Rating bar</Card.Text>
                    <Form>
                        <Form.Group controlId="formUserReview">
                            <Form.Label>Comments</Form.Label>
                            <Form.Control as="textarea" rows="3" name="userIdComment" />
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
            <Card style={cardStyle}>
                <Card.Body>
                    <Card.Title>User3</Card.Title>
                    <Card.Text>Rating bar</Card.Text>
                    <Form>
                        <Form.Group controlId="formUserReview">
                            <Form.Label>Comments</Form.Label>
                            <Form.Control as="textarea" rows="3" name="userIdComment" />
                        </Form.Group>
                    </Form>
                </Card.Body>
            </Card>
        </div>
    )
}

export default UserReview;