import React, { useState, useContext, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/auth/authContext";
import EventContext from "../context/event/eventContext";
import Loading from "../components/Loading";

import EventList from "../components/events/EventList";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import data from "../bg.json"

const lightsImg = data[0].src;

const User = props => {
    const [showProfile, setShowProfile] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [displayName, setDisplayName] = useState("");
    const [image, setImage] = useState("");
    const [bio, setBio] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passwordMatch, setPasswordMatch] = useState("");
    const authContext = useContext(AuthContext);
    const { user, updateUser } = authContext;
    const eventContext = useContext(EventContext);
    const { clearCurrent, clearUsers, events, getUserEvents } = eventContext;

    useEffect(() => {
        if (!user) {
            authContext.loadUser();
            // console.log("missing user")
        }
    });

    useEffect(() => {
        clearUsers();
        clearCurrent();
        getUserEvents();
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (user) {
            setFirstName(user.firstname);
            setLastName(user.lastname);
            setDisplayName(user.displayname);
            setImage(user.image);
            setEmail(user.email);
            setBio(user.bio);
            console.log(user);
        }
    }, [user]);


  const handleProfileSubmit = e => {
    e.preventDefault();
    updateUser({
      ...user,
      firstname: firstName,
      lastname: lastName,
      displayname: displayName,
      image: image,
      bio: bio,
      email: email
    });
    setShowProfile(false);
  };



    const handlePasswordSubmit = e => {
        e.preventDefault();
        if (password !== passwordMatch) {
            alert("Passwords must match");
        } else if (password === "" || passwordMatch === "") {
            alert("Passwords cannot be blank");
        } else {
            updateUser({
                ...user,
                password: passwordMatch
            });
        }
        setShowPassword(false);
    };

    if (!user) {
        return <Loading />;
    }

    return (
        // move background to app.js...
        // <div className="bg" style={{ backgroundImage: `url(${lightsImg})`, backgroundSize: "cover", minHeight: "100vh", padding: "10px" }}>
        <Fragment>
            <Row>
                <Col md={6}>
                    <Card>
                        {user && user.image && <Card.Img variant="top" src={user && user.image} />}
                        <Card.Body>
                            <Card.Title>Welcome, {user && user.displayname}!</Card.Title>
                            <Card.Text>
                                {user && user.firstname + " " + user.lastname === "undefined undefined"
                                    ? "Update your first and last name"
                                    : "Name: " + (user && user.firstname + " " + user.lastname)}
                                <br />
                                {user && user.bio === "undefined"
                                    ? "Add some info about yourself"
                                    : "Bio: " + (user && user.bio)}
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer 
                        
                style={{
                    textAlign: "right",
                    background: "#343a40",
                    color: "white"
                  }}>
                            <Link to="#" onClick={() => setShowProfile(true)}>Edit profile</Link><br />
                            <Link to="#" onClick={() => setShowPassword(true)}>Change password</Link>
                        </Card.Footer>
                    </Card>
                </Col>
                <Col md={6}>
                    <Card>
                        {/* <Card.Header>
                                <Card.Subtitle style={{ marginBottom: "10px" }}>
                                    <Link to="/create" className="card-link">Create New Event</Link>
                                </Card.Subtitle>
                            </Card.Header> */}
                        <Card.Body>
                            {events ? <EventList events={events} /> : <Card.Text>No events available.</Card.Text>}
                        </Card.Body>
                    </Card>
                </Col>
            </Row>

            {showProfile && (
                <Modal
                    size="md"
                    show={showProfile}
                    onHide={() => setShowProfile(false)}
                    centered
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Profile</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handleProfileSubmit}>
                            <Form.Group controlId="updateFirstName">
                                <Form.Label>First Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={e => setFirstName(e.target.value)}
                                    defaultValue={user && user.firstname}
                                />
                            </Form.Group>
                            <Form.Group controlId="updateLastName">
                                <Form.Label>Last Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={e => setLastName(e.target.value)}
                                    defaultValue={user && user.lastname}
                                />
                            </Form.Group>
                            <Form.Group controlId="updateDisplayName">
                                <Form.Label>Display Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={e => setDisplayName(e.target.value)}
                                    defaultValue={user && user.displayname}
                                />
                            </Form.Group>
                            <Form.Group controlId="updateImage">
                                <Form.Label>Image</Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={e => setImage(e.target.value)}
                                    defaultValue={user && user.image}
                                />
                            </Form.Group>
                            <Form.Group controlId="updateBio">
                                <Form.Label>Bio</Form.Label>
                                <Form.Control
                                    type="text"
                                    onChange={e => setBio(e.target.value)}
                                    defaultValue={user && user.bio}
                                />
                            </Form.Group>
                            <Form.Group controlId="updateEmail">
                                <Form.Label>Change Email</Form.Label>
                                <Form.Control
                                    type="email"
                                    defaultValue={user && user.email}
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </Form.Group>
                            <Row className="justify-content-center">
                                <Button type="submit" style={{ margin: "0 5px" }}>
                                    Submit
                  </Button>
                                <Button
                                    onClick={() => setShowProfile(false)}
                                    style={{ margin: "0 5px" }}
                                >
                                    Cancel
                  </Button>
                            </Row>
                        </Form>
                    </Modal.Body>
                </Modal>
            )}

            {
                showPassword &&
                <Modal size="md" show={showPassword} onHide={() => setShowPassword(false)} centered>
                    <Modal.Header closeButton>
                        <Modal.Title>Update Password</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form onSubmit={handlePasswordSubmit}>
                            <Form.Group controlId="updatePassword">
                                <Form.Label>Change Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Password"
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </Form.Group>
                            <Form.Group controlId="updatePasswordMatch">
                                <Form.Label>Verify Password</Form.Label>
                                <Form.Control
                                    type="password"
                                    placeholder="Verify Password"
                                    onChange={e => setPasswordMatch(e.target.value)}
                                />
                            </Form.Group>
                            <Row className="justify-content-center">
                                <Button type="submit" style={{ margin: "0 5px" }}>Submit</Button>
                                <Button onClick={() => setShowPassword(false)} style={{ margin: "0 5px" }}>Cancel</Button>
                            </Row>
                        </Form>
                    </Modal.Body>
                </Modal>
            }
        </Fragment>
        // </div>
    );
};

export default User;
