import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Jumbotron, Modal } from "react-bootstrap";
import { Button } from "react-bootstrap";
const Register = React.lazy(() => import("./Register"));
const SignIn = React.lazy(() => import("./SignIn"));

const About = props => {
    return (
        <Container>
            <Jumbotron fluid>
                <h1 className='text-center'> Friend Finder</h1>
            </Jumbotron>
            <Row className="d-flex justify-content-center">
                <Col md="3" className="d-flex justify-content-between">
                    <Button variant="primary" onClick={props.handleShowRegister}>Register</Button>
                    <Button variant="primary" onClick={props.handleShowSignin}>Sign In</Button>
                </Col>
            </Row>
            <Modal size="lg" show={props.showRegister} onHide={props.handleShowRegister} aria-labelledby="example-modal-sizes-title-lg">
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Register
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Register onHide={props.handleShowRegister}/>
                </Modal.Body>
            </Modal>
            <Modal size="lg" show={props.showSignin} onHide={props.handleShowSignin} aria-labelledby="example-modal-sizes-title-lg">
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Sign In
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <SignIn onHide={props.handleShowSignin}/>
                </Modal.Body>
            </Modal>
        </Container>
    )
}

export default About;