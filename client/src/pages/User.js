import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const useStyles = {
  flexBetween: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  gridList: {
    width: 500,
    height: 450
  },
  icon: {
    color: "rgba(255, 255, 255, 0.54)"
  },
  fab: {
    textAlign: "right"
  },
  root: {
    flexGrow: 1
  },
  media: {
    height: 140
  }
};

const User = props => {
  const [modalShow, setModalShow] = useState(false);

  return (
    <Container>
      <Row>
        <Col>
          <Card style={{ width: "25em", margin: "10px 0" }}>
            <Card.Body>
              <div style={useStyles.flexBetween}>
                <Card.Title>Welcome, user.displayname</Card.Title>{" "}
                <Card.Link href="#" onClick={() => setModalShow(true)}>
                  Edit
                </Card.Link>
              </div>
              <Card.Subtitle className="mb-2 text-muted">Lizard</Card.Subtitle>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content. user.profile
              </Card.Text>
              <Card.Link href="/create">Create Event</Card.Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          {" "}
          <Card style={{ width: "25em", margin: "10px 0" }}>
            <Card.Body>
              <Tabs defaultActiveKey="home" id="eventTabs">
                <Tab eventKey="home" title="Upcoming Events">
                  <br />
                  <Row>
                    Your Created Events
                    <Card style={{ width: "22rem" }}>
                      <Card.Body>
                        <Card.Title>Go To Japan</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          Travel
                        </Card.Subtitle>
                        <Card.Text>
                          Looking for someone to go to Japan with.
                        </Card.Text>
                        <Card.Link href="#">View Event</Card.Link>
                      </Card.Body>
                    </Card>
                  </Row>
                  <Row>
                    Joined Events
                    <Card style={{ width: "22rem" }}>
                      <Card.Body>
                        <Card.Title>Harry Potter Marathon</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          Movie
                        </Card.Subtitle>
                        <Card.Text>
                          Watch all the Harry Potter's with me!
                        </Card.Text>
                        <Card.Link href="#">View Event</Card.Link>
                      </Card.Body>
                    </Card>
                  </Row>
                  <Row>
                    Pending Events
                    <Card style={{ width: "22rem" }}>
                      <Card.Body>
                        <Card.Title>Go To Japan</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          Travel
                        </Card.Subtitle>
                        <Card.Text>
                          Looking for someone to go to Japan with.
                        </Card.Text>
                        <Card.Link href="#">View Event</Card.Link>
                      </Card.Body>
                    </Card>
                  </Row>
                </Tab>
                <Tab eventKey="profile" title="Past Events">
                  <br />
                  <Card style={{ width: "22rem" }}>
                    <Card.Body>
                      <Card.Title>Jogging Partner</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        Fitness
                      </Card.Subtitle>
                      <Card.Text>Come run with me.</Card.Text>
                      <Card.Link href="#">View Event</Card.Link>
                    </Card.Body>
                  </Card>
                </Tab>
              </Tabs>
            </Card.Body>
          </Card>
        </Col>
      </Row>{" "}
      <EditProfileModal show={modalShow} onHide={() => setModalShow(false)} />
    </Container>
  );
};

const EditProfileModal = props => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">Lizard</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Edit Profile</h4>
        <Form>
          <Form.Row>
            <Form.Group as={Col} controlId="changeFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control />
            </Form.Group>
            <Form.Group as={Col} controlId="changeLastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control />
            </Form.Group>
          </Form.Row>

          <fieldset>
            <Form.Group as={Row}>
              <Form.Label as="legend" column sm={2}>
                Display Name
              </Form.Label>
              <Col sm={10}>
                <Form.Check type="radio" label="Username" value="Username" />
                <Form.Check
                  type="radio"
                  label="First Name, Last initial"
                  value="realName"
                />
                <InputGroup>
                  <InputGroup.Prepend>
                    <input
                      type="radio"
                      style={{ margin: "0.75rem 0.4rem 0.75rem 0" }}
                    />
                  </InputGroup.Prepend>
                  <Form.Control placeholder="Other" />
                </InputGroup>
              </Col>
            </Form.Group>
          </fieldset>

          <Form.Group controlId="changeEmail">
            <Form.Label>Change Email</Form.Label>
            <Form.Control type="email" defaultValue="mrlizard@scales.com" />
          </Form.Group>

          <Form.Group controlId="changePassword">
            <Form.Label>Change Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>

          <Form.Group controlId="verChangePassword">
            <Form.Label>Verify Password</Form.Label>
            <Form.Control type="password" placeholder="Verify Password" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Submit</Button>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default User;
