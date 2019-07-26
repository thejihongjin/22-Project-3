import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";

function Register(props) {
  return (
    <Container>
      <Form>
        <Form.Group controlId="newUser">
          <Form.Label>Username: </Form.Label>
          <Form.Control type="text" placeholder="Username" />
        </Form.Group>
        <Form.Group controlId="newemail">
          <Form.Label>Email:</Form.Label>
          <Form.Control type="email" placeholder="Email" />
        </Form.Group>
        <Form.Group controlId="newPass">
          <Form.Label>Password:</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="newPass">
          <Form.Label>Re-type Password:</Form.Label>
          <Form.Control
            type="password"
            placeholder="Type in your password again"
          />
        </Form.Group>
        <Row className="justify-content-center">
          <Col md="4">
            <Row className="justify-content-between">
              <Button variant="primary" href="/user" type="submit">
                Register
              </Button>
              <Button onClick={props.onHide} varient="danger">
                Cancel
              </Button>
            </Row>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default Register;
