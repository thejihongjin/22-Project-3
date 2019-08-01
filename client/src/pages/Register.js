import React, { useState } from "react";
// import User from "../pages/User";
import { Container, Row, Col } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import API from "../utils/API";
import { useUserContext } from "../utils/userContext";
import history from "../utils/history";

function Register(props) {
  const [newUserName, setNewUserName] = useState("");
  const [newEmail, setNewEmail] = useState("");
  const [newPassWord, setNewPassWord] = useState("");
  const [passWordVer, setPassWordVer] = useState("");
  const [state, dispatch] = useUserContext();

  const handleSubmit = async e => {
    e.preventDefault();
    if (newPassWord !== passWordVer) {
      alert("passwords must match");
    } else {
      API.registerUser({
        username: newUserName,
        displayname: newUserName,
        email: newEmail,
        password: passWordVer
      })
        .then(returnUser => {
          dispatch({ type: "registerNewUser", user: returnUser.data });
        })
        .then(history.push("/user"));
    }

    /*API.registerUser(
      {
        username: newUserName,
        displayname: newUserName,
        email: newEmail,
        password: passWordVer
      },
      result => console.log(result)
    );*/
  };
  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="newUser">
          <Form.Label>Username: </Form.Label>
          <Form.Control
            value={newUserName}
            onChange={e => setNewUserName(e.target.value)}
            type="text"
            placeholder="Username"
          />
        </Form.Group>
        <Form.Group controlId="newemail">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            value={newEmail}
            onChange={e => setNewEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
        </Form.Group>
        <Form.Group controlId="newPass">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            value={newPassWord}
            onChange={e => setNewPassWord(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group controlId="newPassVer">
          <Form.Label>Re-type Password:</Form.Label>
          <Form.Control
            value={passWordVer}
            onChange={e => setPassWordVer(e.target.value)}
            type="password"
            placeholder="Type in your password again"
          />
        </Form.Group>
        <Row className="justify-content-center">
          <Col md="4">
            <Row className="justify-content-between">
              <Button variant="primary" type="submit">
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
