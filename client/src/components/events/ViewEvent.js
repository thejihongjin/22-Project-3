import React, { useState, useContext, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Toast from "react-bootstrap/Toast";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import EventContext from "../../context/event/eventContext";
import AuthContext from "../../context/auth/authContext";
import history from "../../utils/history";

const ViewEvent = () => {
  const state = {
    owner: false,
    joined: false
  };
  const eventContext = useContext(EventContext);
  const { clearCurrent, current, joinEvent, unjoinEvent } = eventContext;
  const authContext = useContext(AuthContext);
  const [showToast, setShowToast] = useState(false);
  const { user } = authContext;
  let didJoin = [];

  useEffect(() => {
    setEvent(current);
    console.log(current);
    // eslint-disable-next-line
  }, [eventContext, current]);

  if (current) {
    didJoin = current.attendingId.filter(attendId => attendId === user._id);
  }

  const [event, setEvent] = useState({
    name: "",
    location: "",
    category: "Movie",
    groupSize: "",
    description: "",
    attendingId: [],
    start: null,
    end: null
  });

  const {
    name,
    location,
    category,
    groupSize,
    description,
    attendingId,
    start,
    end
  } = event;

  const handleJoin = () => {
    joinEvent(event);
    setShowToast(true);
  };

  const handleUnjoin = () => {
    unjoinEvent(event);
    console.log("Unjoined");
  };

  const goBackUser = () => {
    clearCurrent();
    history.push("/user");
  };

  const goBackSearch = () => {
    clearCurrent();
    history.push("/search");
  };

  return (
    <Fragment>
      {current ? (
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
            <Card.Text>{description}</Card.Text>

            {current.user === user._id ? (
              <Button>Owned</Button>
            ) : didJoin[0] === user._id ? (
              <Button
                type="submit"
                style={{ float: "right" }}
                className="btn-success"
                size="sm"
                onClick={() => handleUnjoin()}
              >
                - Leave Event
              </Button>
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
