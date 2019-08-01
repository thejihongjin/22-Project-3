import React, { useState} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Jumbotron, Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
const Register = React.lazy(() => import("./Register"));
const SignIn = React.lazy(() => import("./SignIn"));

const About = props => {

    const [showRegister, setShowRegister] = useState(false);
    const [showSignIn, setShowSignIn] = useState(false);

    return (
        <Container>
            <Jumbotron fluid>
                <h1 className='text-center'> Friend Finder</h1>
            </Jumbotron>
            <Row className="d-flex justify-content-center">
                <Col md="3" className="d-flex justify-content-between">
                    <Button variant="primary" onClick={() => setShowRegister(true)}>Register</Button>
                    <Button variant="primary" onClick={() => setShowSignIn(true)}>Sign In</Button>
                </Col>
            </Row>
<<<<<<< HEAD
            <Modal size="lg" show={showRegister} onHide={() => setShowRegister(false)} aria-labelledby="example-modal-sizes-title-lg">
=======
            <Modal size="lg" show={props.state.showRegister} onHide={props.handleShowRegister} aria-labelledby="example-modal-sizes-title-lg">
>>>>>>> master
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Register
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
<<<<<<< HEAD
                <Register onHide={() => setShowRegister(false)}/>
                </Modal.Body>
            </Modal>
            <Modal size="lg" show={showSignIn} onHide={() => setShowRegister(false)} aria-labelledby="example-modal-sizes-title-lg">
=======
                    <Register onHide={props.handleShowRegister} state={props.state}handleInputChange={props.handleInputChange}  handleSubmit={props.handleSubmit}/>
                </Modal.Body>
            </Modal>
            <Modal size="lg" show={props.state.showSignin} onHide={props.handleShowSignin} aria-labelledby="example-modal-sizes-title-lg">
>>>>>>> master
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Sign In
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
<<<<<<< HEAD
                    <SignIn onHide={() => setShowRegister(false)}/>
=======
                    <SignIn onHide={props.handleShowSignin} state={props.state} handleInputChange={props.handleInputChange}/>
>>>>>>> master
                </Modal.Body>
            </Modal>
        </Container>
    )
}

export default About;