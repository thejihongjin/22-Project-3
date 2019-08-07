import React, { Fragment, useContext, useState } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/auth/authContext";
import history from "../utils/history"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Modal from "react-bootstrap/Modal";
import Register from "../pages/Register"
import SignIn from "../pages/SignIn"



const Navigation = () => {
    const authContext = useContext(AuthContext);
    const { isAuthenticated, logout } = authContext;

    const [showRegister, setShowRegister] = useState(false);
    const [showSignIn, setShowSignIn] = useState(false);

    const onLogout = () => {
        logout();
        history.push("/")
    };

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
        </Nav>
    );

    return (
        <Fragment>
            <Navbar sticky="top" bg="dark" variant="dark" expand="md">
                <Navbar.Brand>
                    <Link to="/" className="nav-link">Lonely Friend Finder</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    {isAuthenticated ? authLinks : guestLinks}
                </Navbar.Collapse>
            </Navbar>

            {
                showRegister &&
                <Modal size="md" show={showRegister} onHide={() => setShowRegister(false)} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Register</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Register onHide={() => setShowRegister(false)} />
                    </Modal.Body>
                </Modal>
            }
            {
                showSignIn &&
                <Modal size="md" show={showSignIn} onHide={() => setShowSignIn(false)} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Sign In</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <SignIn onHide={() => setShowSignIn(false)} />
                    </Modal.Body>
                </Modal>
            }
        </Fragment>
    );
};

export default Navigation;