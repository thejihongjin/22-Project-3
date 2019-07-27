import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

function Navigation() {
    return (
        // <div style={{ margin: "0 auto" }}>hi</div>
        <Navbar sticky="top" bg="light" expand="lg">
            <Navbar.Brand>Lonely Friend Finder</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/user">USERNAME</Nav.Link>
                    <Nav.Link href="/search">Find an Event</Nav.Link>
                    <Nav.Link href="/about">Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}

export default Navigation;