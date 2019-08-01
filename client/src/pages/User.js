import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
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
import { useUserContext } from "../utils/userContext"
import API from "../utils/API";
import history from '../utils/history';
import Navigation from "../components/Navigation"


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

const User = (props) => {
    const [modalShow, setModalShow] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [email, setEmail] = useState("");
    const [passWord, setPassWord] = useState("");
    const [passWordVer, setPassWordVer] = useState("");
    const [state, dispatch] = useUserContext();

    const user = state.user

    console.log(user);

    const handleProfileSubmit = async e => {
        e.preventDefault();
        if (passWord !== passWordVer) {
            alert("passwords must match");
        } else {
            API.updateUser(
                user._id,
                {
                    firstname: firstName,
                    lastname: lastName,
                    displayname: displayName,
                    email: email,
                    password: passWordVer
                }).then(
                    returnUser => { dispatch({ type: "registerNewUser", user: returnUser.data }) }
                ).then(
                    history.push('/user')
                )
        }
    }

    return (
        <Container>
        <Navigation/>
            <Row>
                <Col>
                    <Card style={{ width: "25em", margin: "10px 0" }}>
            <Card.Body>
              <div style={useStyles.flexBetween}>
                <Card.Title>Welcome, {user.displayname} </Card.Title>{" "}
                <Link href="#" onClick={() => setModalShow(true)}>
                  Edit
                </Link>
              </div>
              <Card.Subtitle className="mb-2 text-muted">Lizard</Card.Subtitle>
              <Card.Text>
                {user.bio === ""
                 ? "Add some info about yourself"
                 : user.bio}
              </Card.Text>
              <Link to="/create" class="card-link">Create New Event</Link>

            </Card.Body>
                    </Card>
                </Col>
                <Col>
                    {" "}
                    <Card style={{ width: "31em", margin: "10px 0" }}>
                        <Card.Body>
                            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
                                <Tab eventKey="home" title="Upcoming Events">
                                    <br />
                                    <Card style={{ width: "18rem" }}>
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
                                    <Card style={{ width: "18rem" }}>
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
                                </Tab>
                                <Tab eventKey="profile" title="Past Events">
                                    <br />
                                    <Card style={{ width: "18rem" }}>
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
            {/* <EditProfileModal show={modalShow} onHide={() => setModalShow(false)} /> */}
            <Modal
                // {...props}
                show={modalShow} onHide={() => setModalShow(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">Lizard</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <h4>Edit Profile</h4>
                    <Form onSubmit={handleProfileSubmit}>
                        <Form.Row>
                            <Form.Group as={Col} controlId="changeFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={e => setFirstName(e.target.value)}
                                    defaultValue={user.firstname}
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="changeLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control 
                                    type="text"
                                    onChange={e => setLastName(e.target.value)}defaultValue={user.lastname} />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group>
                            <Form.Label>Display Name</Form.Label>
                            <Form.Control 
                                    type="text"
                                    onChange={e => setDisplayName(e.target.value)}placeholder={user.displayname} />
                            {/* add subtitle */}
                        </Form.Group>

                        <Form.Group controlId="changeEmail">
                            <Form.Label>Change Email</Form.Label>
                            <Form.Control type="email" defaultValue={user.email} 
                                    onChange={e => setEmail(e.target.value)}/>
                        </Form.Group>
                        <Form.Group controlId="changePassword">
                            <Form.Label>Change Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" 
                                    onChange={e => setPassWord(e.target.value)}/>
                        </Form.Group>

                        <Form.Group controlId="verChangePassword">
                            <Form.Label>Verify Password</Form.Label>
                            <Form.Control type="password" placeholder="Verify Password" 
                                    onChange={e => setPassWordVer(e.target.value)}/>
                        </Form.Group>

                    <Button type="submit">Submit</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </Container>


    );
};

export default User;