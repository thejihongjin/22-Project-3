import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/auth/authContext";
import { Container as Fragment, Row, Col } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import history from "../../utils/history";

const Register = props => {
  const authContext = useContext(AuthContext);
  const { register, error, clearErrors, isAuthenticated } = authContext;

  const [user, setUser] = useState({
    newUserName: "",
    newEmail: "",
    newPassWord: "",
    passWordVer: ""
  });
  const { newUserName, newEmail, newPassWord, passWordVer } = user;

  useEffect(() => {
    if (isAuthenticated) {
      // redirect to userpage
      history.push("/user");
    }

    if (error === "User already exists") {
      alert("User already exists");
      clearErrors();
    }
    // eslint-disable-next-line
  }, [error, isAuthenticated]);

  const handleChange = e =>
    setUser({ ...user, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    if (newUserName === "" || newEmail === "" || newPassWord === "") {
      alert("Please enter all fields");
    } else if (newPassWord !== passWordVer) {
      alert("Passwords do not match");
    } else {
      register({
        username: newUserName,
        displayname: newUserName,
        email: newEmail,
        password: passWordVer
      });
    }
  };

  return (
    <Fragment>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="newUser">
          <Form.Label>Username: </Form.Label>
          <Form.Control
            value={newUserName}
            name="newUserName"
            onChange={handleChange}
            type="text"
            placeholder="Username"
          />
        </Form.Group>
        <Form.Group controlId="newemail">
          <Form.Label>Email:</Form.Label>
          <Form.Control
            value={newEmail}
            name="newEmail"
            onChange={handleChange}
            type="email"
            placeholder="Email"
          />
        </Form.Group>
        <Form.Group controlId="newPass">
          <Form.Label>Password:</Form.Label>
          <Form.Control
            value={newPassWord}
            name="newPassWord"
            onChange={handleChange}
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Form.Group controlId="newPassVer">
          <Form.Label>Re-type Password:</Form.Label>
          <Form.Control
            value={passWordVer}
            name="passWordVer"
            onChange={handleChange}
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
    </Fragment>
  );
};

export default Register;
