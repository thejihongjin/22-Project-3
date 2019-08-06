import React, { useEffect, useContext } from "react";
import history from "../utils/history";
import AuthContext from "../context/auth/authContext";
import { Container } from "react-bootstrap";
import Carousel from "../components/Carousel";
import Nav from "react-bootstrap/Nav";
import Navigation from "../components/Navigation";

// import "./Style.css"

const About = props => {
  const authContext = useContext(AuthContext);
  const { isAuthenticated, user } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      authContext.loadUser();
      // redirect to userpage
      history.push("/user");
    }

    // eslint-disable-next-line
  }, [isAuthenticated, history]);

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
