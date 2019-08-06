import React, { useState, useContext, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup"
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Toast from "react-bootstrap/Toast";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import EventContext from "../../context/event/eventContext";
import AuthContext from "../../context/auth/authContext";
import history from "../../utils/history";
import Map from "../Map";

const ViewEvent = () => {
  const eventContext = useContext(EventContext);
  const {
    clearCurrent,
    current,
    joinEvent,
    unjoinEvent,
    deleteEvent,
    getUsersProfile,
    setUsers,
    clearUsers
  } = eventContext;
  const authContext = useContext(AuthContext);
  const [showToast, setShowToast] = useState(false);
  const { user } = authContext;
  const state = { owned: false, joined: false };
  const [showAlert, setShowAlert] = useState(false);
  const [event, setEvent] = useState({
    name: "",
    location: "",
    addressInfo: "",
    category: "Movie",
    groupSize: "",
    description: "",
    attendingId: [],
    start: null,
    end: null,
    mapLat: null,
    mapLng: null,
    didJoin: []
  });
  useEffect(() => {
    setEvent(current);
    console.log(current.attendingId);
    getUsersProfile(current);
    // eslint-disable-next-line
  }, []);

  if (current === null) {
    history.push("/user");
  }

  console.log(setUsers);
  event.didJoin = current.attendingId.filter(attendId => attendId === user._id);
  console.log(event.didJoin);
  if (current.user === user._id) {
    state.owned = true;
  } else if (event.didJoin[0] === user._id) {
    state.joined = true;
  }

  const {
    name,
    location,
    addressInfo,
    category,
    groupSize,
    description,
    attendingId,
    start,
    end,
    mapLat,
    mapLng
  } = event;

  const handleJoin = () => {
    if (groupSize !== "Any" && parseInt(groupSize) === attendingId.length) {
      alert("Sorry, this event is full. 😟");
    } else {
      joinEvent(event);
      setShowToast(true);
      setEvent(current);
      getUsersProfile(current);
    }
  };

  const handleUnjoin = () => {
    unjoinEvent(event);
    setEvent(current);
    getUsersProfile(current);
  };

  const goBackUser = () => {
    clearCurrent();
    clearUsers();
    history.push("/user");
  };

  const goBackSearch = () => {
    clearCurrent();
    clearUsers();
    history.push("/search");
  };

  const handleDelete = () => {
    setShowAlert(false);
    deleteEvent(current._id);
    clearCurrent();
    clearUsers();
    history.push("/user");
  };

  if (showAlert) {
    return (
      <Card style={{ width: "25rem" }}>
        <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
          <Alert.Heading>
            Are you sure you want to delete this event?
          </Alert.Heading>
          <Button className="btn-danger" onClick={handleDelete}>
            Yes
          </Button>
        </Alert>
      </Card>
    );
  }

  return (
    <Fragment>
      {current ? (
        <CardGroup>
        <Card style={{ width: "25rem" }}>
          {" "}
          <Card.Body>
            <Card.Title>{name.toUpperCase()}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {category}
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              Date: {start}
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              Date: {end}
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              {location}
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              {addressInfo}
            </Card.Subtitle>
            <Card.Text>{description}</Card.Text>



            <Card.Subtitle className="mb-2 text-muted">
              {attendingId.length} out of {groupSize} people are going.
            </Card.Subtitle>
            <Card.Subtitle className="mb-2 text-muted">
              People Attending:
              <br />
              {setUsers
                ? setUsers.map(userLink => (
                    <Fragment>
                      <Link key={userLink._id}>{userLink.username}</Link>
                      <br />
                    </Fragment>
                  ))
                : null}
            </Card.Subtitle>

            {state.owned ? (
              <Button
                style={{ float: "right" }}
                className="btn-danger"
                size="sm"
                onClick={() => setShowAlert(true)}
              >
                Delete
              </Button>
            ) : state.joined ? (
              <Fragment>
                <p>You have already joined this event!</p>

                <Button
                  type="submit"
                  style={{ float: "right" }}
                  className="btn-warning"
                  size="sm"
                  onClick={() => handleUnjoin()}
                >
                  - Leave Event
                </Button>
              </Fragment>
            ) : (
              <Button
                type="submit"
                style={{ float: "right" }}
                className="btn-success"
                size="sm"
                onClick={() => handleJoin()}
              >
                + Join
              </Button>
            )}

            <Button size="sm" onClick={goBackSearch}>
              Search More Events
            </Button>
            <Button size="sm" onClick={goBackUser}>
              Back To Profile
            </Button>
          </Card.Body>
        </Card>

        <Card>
          <Map lat={mapLat} lng={mapLng}
          />
        </Card>

        </CardGroup>
      ) : (
        <div> Sorry, this event is not available.</div>
      )}
      <Row>
        <Col xs={6}>
          <Toast
            onClose={() => setShowToast(false)}
            show={showToast}
            delay={3000}
            autohide
          >
            <Toast.Header>
              <strong className="mr-auto">{name.toUpperCase()}</strong>
            </Toast.Header>
            <Toast.Body>Event Joined!</Toast.Body>
          </Toast>
        </Col>
      </Row>
    </Fragment>
  );
};

export default ViewEvent;
