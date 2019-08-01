import React from 'react';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link} from "react-router-dom";
import { useUserContext} from "../utils/userContext";

function Navigation() {
    const [state,dispatch] = useUserContext()
    return (
        // <div style={{ margin: "0 auto" }}>hi</div>
        <Navbar sticky="top" bg="light" expand="lg">
            <Navbar.Brand>Lonely Friend Finder</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Item>
                        <Link to="/user">{state.user.displayname}</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/search">Find an Event</Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Link to="/about">Log Out</Link>
                    </Nav.Item>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}

export default Navigation;