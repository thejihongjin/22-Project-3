import React from "react";
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
                        <Link to="/user" className="nav-link">{state.user.displayname}</Link>
                        <Link to="/search" className="nav-link">Find an Event</Link>
                        <Link to="/about" className="nav-link">Log Out</Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar >
    )
}

export default Navigation;
