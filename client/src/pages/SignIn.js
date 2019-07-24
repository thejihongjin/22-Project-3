import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Form, Button} from "react-bootstrap"

function SignIn() {
    return (
        <Container>
            <Row className="justify-content-center">
                <h1>Sign In</h1>
            </Row>
            <Form>
                <Form.Group controlId="signInUser">
                    <Form.Label>Username: </Form.Label>
                    <Form.Control type="text" placeholder="Username" />
                </Form.Group>
                <Form.Group controlId="signInPass">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Row className="justify-content-center">
                    <Col md="4">
                        <Row className="justify-content-between">
                            <Button variant="primary" type="submit">
                                Sign In
                            </Button>
                            <Button varient="danger">
                                Cancel
                            </Button>
                        </Row>
                    </Col>
                </Row>
            </Form>
        </Container>
    )
}

export default SignIn