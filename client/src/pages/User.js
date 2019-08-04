import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import EventList from "../components/events/EventList";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import AuthContext from "../context/auth/authContext";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import API from "../utils/API";
import Navigation from "../components/Navigation";

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
  const [passwordModalShow, setPasswordModalShow] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [image, setImage] = useState("");
  const [bio, setBio] = useState("");
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");
  const [passWordVer, setPassWordVer] = useState("");
  const authContext = useContext(AuthContext);
  const { user, updateUser } = authContext;

  useEffect(()=> {
    if(!user) {
      authContext.loadUser();
    }
  })

  useEffect(() => {
    if(user) {
      setFirstName(user.firstname);
      setLastName(user.lastname);
      setDisplayName(user.displayname);
      setImage(user.avatar);
      setEmail(user.email);
      setBio(user.bio)
      console.log(user)
    }
  },[user]);


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
    setModalShow(false);
  };

  const handlePasswordSubmit = e => {
    e.preventDefault();
    if (passWord !== passWordVer) {
      alert("passwords must match");
    } else if(passWordVer === "") {
      alert("Passwords cannot be blank")
    } else {
      updateUser({
        ...user,
        password: passWordVer
      })
    }
    setPasswordModalShow(false)
  }

  return (
    <Container>
      <Navigation />
      <Row>
        <Col>
          <Card style={{ width: "25em", margin: "10px 0" }}>
            {user && user.image && (
              <Card.Img variant="top" src={user && user.image} />
            )}
            <Card.Body>
              <div style={useStyles.flexBetween}>
                <Card.Title>Welcome, {user && user.displayname}</Card.Title>{" "}
                <Link to="#" onClick={() => setModalShow(true)}>
                  Edit
                </Link>
                <Link to="#" onClick={() => setPasswordModalShow(true)}>
                  Change password
                </Link>
              </div>
              <Card.Subtitle className="mb-2 text-muted">
                {/* {user && user.displayname} */}
                User Profile
              </Card.Subtitle>
              <Card.Text>
                {user &&
                user.firstname + " " + user.lastname === "undefined undefined"
                  ? "Update your first and last name"
                  : "Name: " + (user && user.firstname + " " + user.lastname)}
              </Card.Text>
              <Card.Text>
                {user && user.bio === ""
                  ? "Add some info about yourself"
                  : "Bio: " + (user && user.bio)}
              </Card.Text>
              <Link to="/create" className="card-link">
                Create New Event
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          {" "}
          <Card style={{ margin: "10px 0" }}>
            <Card.Body>
              <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
                <Tab eventKey="home" title="Upcoming Events">
                  <br />
                  <EventList />
                </Tab>
                <Tab eventKey="profile" title="Past Events" />
              </Tabs>
            </Card.Body>
          </Card>
        </Col>
      </Row>{" "}
      {/* <EditProfileModal show={modalShow} onHide={() => setModalShow(false)} /> */}
      <Modal
        // {...props}
        show={modalShow}
        onHide={() => setModalShow(false)}
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
                  onChange={e => {setFirstName(e.target.value);console.log(firstName)}}
                  defaultValue={user && user.firstname}
                />
              </Form.Group>
              <Form.Group as={Col} controlId="changeLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control
                  type="text"
                  onChange={e => setLastName(e.target.value)}
                  defaultValue={user && user.lastname}
                />
              </Form.Group>
            </Form.Row>

            <Form.Group>
              <Form.Label>Display Name</Form.Label>
              <Form.Control
                type="text"
                onChange={e => setDisplayName(e.target.value)}
                defaultValue={user && user.displayname}
              />
              {/* add subtitle */}
            </Form.Group>
            <Form.Group>
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                onChange={e => setImage(e.target.value)}
                // defaultValue={user && user.image}
                defaultValue="https://via.placeholder.com/300x150"
              />
            </Form.Group>

            <Form.Group>
              <Form.Label>Bio</Form.Label>
              <Form.Control
                type="text"
                onChange={e => setBio(e.target.value)}
                defaultValue={user && user.bio}
              />
            </Form.Group>

            <Form.Group controlId="changeEmail">
              <Form.Label>Change Email</Form.Label>
              <Form.Control
                type="email"
                defaultValue={user && user.email}
                onChange={e => setEmail(e.target.value)}
              />
            </Form.Group>
            <Button type="submit">Submit</Button>
            <Button onClick={()=>setModalShow(false)}>Cancel</Button>
          </Form>
        </Modal.Body>
      </Modal>
      <Modal
        show={passwordModalShow}
        onHide={() => setPasswordModalShow(false)}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Change Password</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <h4>Change Password</h4>
         <Form onSubmit={handlePasswordSubmit}>
            <Form.Group controlId="changePassword">
              <Form.Label>Change Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={e => setPassWord(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="verChangePassword">
              <Form.Label>Verify Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Verify Password"
                onChange={e => setPassWordVer(e.target.value)}
              />
            </Form.Group>
            <Row>
              <Button type="submit">Submit</Button>
              <Button onClick={()=>setPasswordModalShow(false)}>Cancel</Button>
            </Row>
         </Form>
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default User;
