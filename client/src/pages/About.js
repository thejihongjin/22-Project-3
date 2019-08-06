import React, { useEffect, useContext } from "react";
import history from "../utils/history";
import AuthContext from "../context/auth/authContext";
import { Container } from "react-bootstrap";
import Carousel from "../components/Carousel";
import Nav from "react-bootstrap/Nav";
import Navigation from "../components/Navigation";

// import "./Style.css"

const About = props => {
  // const [showRegister, setShowRegister] = useState(false);
  // const [showSignIn, setShowSignIn] = useState(false);
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

      {/* <Jumbotron fluid className="header">
        <div className="float-right">
          <Button className="buttonClick" variant="primary" onClick={() => setShowRegister(true)}>Register</Button> <Button className="buttonClick" variant="primary" onClick={() => setShowSignIn(true)}>Sign In</Button>
        </div>
        <h1 className="text-center">Lonely Friend Finder</h1>
      </Jumbotron> */}

      <Container className="container">
        <Carousel />

        {/* <Modal
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
        </Modal> */}
      </Container>
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
