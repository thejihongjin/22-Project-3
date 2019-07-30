import React from "react";
// import User from "../pages/User";
import { Container, Row, Col } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";

const Register = props => {
    return (
        <Container>
            <Form onSubmit={props.handleSubmit}>
                <Form.Group controlId="newUser">
                    <Form.Label>Username: </Form.Label>
                    <Form.Control
                        name="newUsername" value={props.state.newUsername} onChange={props.handleInputChange}
                        type="text"
                        placeholder="Username"
                    />
                </Form.Group>
                <Form.Group controlId="newemail">
                    <Form.Label>Email:</Form.Label>
                    <Form.Control
                        name="newEmail" value={props.state.newEmail} onChange={props.handleInputChange}
                        type="email"
                        placeholder="Email"
                    />
                </Form.Group>
                <Form.Group controlId="newPass">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                        name="newPassword" value={props.state.newPassword} onChange={props.handleInputChange}
                        type="password"
                        placeholder="Password"
                    />
                </Form.Group>
                <Form.Group controlId="newPass">
                    <Form.Label>Re-type Password:</Form.Label>
                    <Form.Control
                        name="newPasswordMatch" value={props.state.newPasswordMatch} onChange={props.handleInputChange}
                        type="password"
                        placeholder="Type in your password again"
                    />
                </Form.Group>
                <Row className="justify-content-center">
                    <Col md="4">
                        <Row className="justify-content-between">
                            <Button variant="primary" type="submit">Register</Button>
                            <Button onClick={props.onHide} varient="danger">Cancel</Button>
                        </Row>
                    </Col>
                </Row>
            </Form>
        </Container>
    );
}

export default Register;