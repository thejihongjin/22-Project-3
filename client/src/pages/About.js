import React from "react"
import { Container, Row, Col} from "react-bootstrap"
import { Jumbotron} from "react-bootstrap"
import { Button} from "react-bootstrap"

function About() {
    return (
        <Container>
            <Jumbotron fluid>
                    <h1 className='text-center'> Friend Finder</h1>
            </Jumbotron>
            <Row className="d-flex justify-content-center">
                <Col md="3" className="d-flex justify-content-between">
                    <Button href="/register" variant="primary">
                        Register
                    </Button>
                    <Button href="/signin" variant="primary">
                        SignIn
                    </Button>
                </Col>
            </Row>
        </Container>
       

    )
}

export default About