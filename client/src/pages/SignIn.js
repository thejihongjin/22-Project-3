import React, { useState } from "react";
import API from "../utils/API";
import { Container, Row, Col } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import { useUserContext } from "../utils/userContext";
import history from '../utils/history';

const SignIn = props => {
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  const [state, dispatch] = useUserContext()

  const handleSubmit = e => {
    e.preventDefault();
    API.getUser({
      email: email,
      password: passWord
    }).then(userInfo => {
      dispatch({ type: "registerNewUser", user: userInfo.data })
    }).then(
      history.push('/user')
    );
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="signInUser">
          <Form.Label>Email: </Form.Label>
          <Form.Control
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="text"
            placeholder="Email"
          />
        </Form.Group>
        <Form.Group controlId="signInPass">
          <Form.Label>Password</Form.Label>
          <Form.Control
            value={passWord}
            onChange={e => setPassWord(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Row className="justify-content-center">
          <Col md="4">
            <Row className="justify-content-between">
              <Button variant="primary" type="submit">
                Sign In
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

export default SignIn;
