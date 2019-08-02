import React, { Fragment, useContext } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import AuthContext from "../context/auth/authContext";

const Navigation = () => {
  const authContext = useContext(AuthContext);

  const { isAuthenticated, logout, user } = authContext;

  const onLogout = () => {
    logout();
  };
  console.log(user);

  const authLinks = (
    <Fragment>
      <li>
        <Link to="/search" className="nav-link">
          Find an Event
        </Link>
      </li>
      <li>
        <a onClick={onLogout} href="#!" className="hide-sm nav-link">
          Logout
        </a>
      </li>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <li>
        <Link to="/register" className="nav-link">
          Register
        </Link>
      </li>
      <li>
        <Link to="/login" className="nav-link">
          Login
        </Link>
      </li>
    </Fragment>
  );

  return (
    <Navbar sticky="top" bg="dark" expand="lg">
      <Navbar.Brand>
        <Link to="/" className="nav-link">
          <h3>Lonely Friend Finder</h3>
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <div>{isAuthenticated ? authLinks : guestLinks}</div>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
