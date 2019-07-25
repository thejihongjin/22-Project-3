import React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { Form, Button} from "react-bootstrap"

function SignIn(props) {
    return (
        <Container>
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
                            <Button onClick={props.onHide} varient="danger">
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