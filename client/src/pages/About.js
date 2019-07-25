import React, { useState}from "react"
import { Container, Row, Col} from "react-bootstrap"
import { Jumbotron, Modal} from "react-bootstrap"
import { Button} from "react-bootstrap"
import Register from "./Register"
import SignIn from "./SignIn"

function About() {
    const [registerShow, setregisterShow] = useState(false);
    const [signinShow, setsigninShow] = useState(false);

    return (
        <Container>
            <Jumbotron fluid>
                    <h1 className='text-center'> Friend Finder</h1>
            </Jumbotron>
            <Row className="d-flex justify-content-center">
                <Col md="3" className="d-flex justify-content-between">
                    <Button variant="primary"
                        onClick={() => setregisterShow(true)}>
                        Register
                    </Button>
                    <Button variant="primary"
                        onClick={() => setsigninShow(true)}>
                        Sign In
                    </Button>
                </Col>
            </Row>
            <Modal
                size="lg"
                show={registerShow}
                onHide={() => setregisterShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
                >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Register
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Register onHide={() => setregisterShow(false)}/>
                </Modal.Body>
            </Modal>
            <Modal
                size="lg"
                show={signinShow}
                onHide={() => setsigninShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
                >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Sign In
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <SignIn onHide={() => setsigninShow(false)}/>
                </Modal.Body>
            </Modal>
        </Container>
    )
}

export default About