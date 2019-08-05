import React, { Fragment, useContext, useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import AuthContext from "../context/auth/authContext";
import history from "../utils/history"
import { Container, Modal } from "react-bootstrap";
import Register from "../pages/Register"
import SignIn from "../pages/SignIn"

const useStyles = {
  flexBetween: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
}

const Navigation = () => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, logout } = authContext;

  const [showRegister, setShowRegister] = useState(false);
  const [showSignIn, setShowSignIn] = useState(false);

  const onLogout = () => {
    logout();
    history.push("/")
  };
  //console.log(user);

  const authLinks = (
 

    <Nav className="mr-auto">
      <Nav.Link href="/search">Find an Event</Nav.Link>
      <Nav.Link onClick={onLogout}>Logout</Nav.Link>
    </Nav>
  );

  const guestLinks = (


    <Nav className="mr-auto">
    <Nav.Link onClick={() => setShowRegister(true)}>Register</Nav.Link>
    <Nav.Link onClick={() => setShowSignIn(true)}>Sign In</Nav.Link>
      {/* <Nav.Link onClick={() => alert("register")}>Register</Nav.Link>
      <Nav.Link onClick={() => alert("signin")}>Sign In</Nav.Link> */}
    </Nav>
  );

  return (
    <Container >
    <Navbar sticky="top" bg="dark" variant="dark" expand="md">
      <div style={useStyles.flexBetween}>
        <div>
      <Navbar.Brand>
        {/* <Link to="/" className="nav-link"> */}
        Lonely Friend Finder
        {/* </Link> */}
      </Navbar.Brand></div> <div>
      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
      <Navbar.Collapse  id="basic-navbar-nav">
        {/* <Nav className="mr-auto"> */}
        {isAuthenticated
          ? authLinks
          : guestLinks
        }
        {/* </Nav> */}
      </Navbar.Collapse></div></div>
    </Navbar>

      

    <Modal
          size="lg"
          show={showRegister}
          onHide={() => setShowRegister(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">Register</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Register onHide={() => setShowRegister(false)} />
          </Modal.Body>
        </Modal>
        <Modal
          size="lg"
          show={showSignIn}
          onHide={() => setShowSignIn(false)}
          aria-labelledby="example-modal-sizes-title-lg"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-lg">Sign In</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <SignIn onHide={() => setShowSignIn(false)} />
          </Modal.Body>
        </Modal>
    </Container>
  );
};

export default Navigation;
