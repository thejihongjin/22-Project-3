import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/auth/authContext";
import { Container, Row, Col } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import history from "../utils/history";

const SignIn = props => {
  const authContext = useContext(AuthContext);
  const { login, error, clearErrors, isAuthenticated } = authContext;
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  


  useEffect(() => {
    if (isAuthenticated) {
      // redirect to userpage
      history.push("/user");
    }

    if (error === "Invalid Credentials") {
      alert("Email or Password is incorrect");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated]);

  const handleSubmit = e => {
    e.preventDefault();
    if (email === "" || passWord === "") {
      alert("Please input both email and password.");
    } else {
      login({
        email: email,
        password: passWord
      });
    }
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
};

export default SignIn;
