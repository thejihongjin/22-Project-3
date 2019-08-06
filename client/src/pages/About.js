
import React, { useState, useEffect, useContext } from "react";
import history from "../utils/history";
import AuthContext from "../context/auth/authContext";
import { Container, Row, Col, Jumbotron, Modal, Button } from "react-bootstrap";
import Register from "./Register"
import SignIn from "./SignIn"
import Carousel from "../components/Carousel"
import Nav from 'react-bootstrap/Nav'
import Footer from "../components/Footer"
import Navigation from "../components/Navigation"

// import "./Style.css"

const About = props => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      // redirect to userpage
      history.push("/user");
    }

    // eslint-disable-next-line
  }, [isAuthenticated]);

  return (
    <div className="main">
      <Navigation />
      <Carousel />
      {/* <Footer/> */}


      <Nav className="justify-content-center end-nav" activeKey="/home">
        <Nav.Item>
          <p className="footer-text"> © 2019 Friend Finder</p>
        </Nav.Item>
      </Nav>

    </div>
  );
};

export default About;