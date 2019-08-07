import React, { useState, useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import EventContext from "../../context/event/eventContext";
import AuthContext from "../../context/auth/authContext";

const EventItem = ({ event }) => {
  console.log(event);
  const eventContext = useContext(EventContext);
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  const { deleteEvent, setCurrent, clearCurrent, events } = eventContext;
  const {
    _id,
    name,
    location,
    category,
    description,
    addressInfo,
    groupSize,
    attendingId,
    start,
    end
  } = event;
  const [showAlert, setShowAlert] = useState(false);

  const handleDelete = () => {
    setShowAlert(false);
    deleteEvent(_id);
    clearCurrent();
  };
  if (showAlert) {
    return (
      <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
        <Alert.Heading>
          Are you sure you want to delete this event?
        </Alert.Heading>
        <Button className="btn-danger" onClick={handleDelete}>
          Yes
        </Button>
      </Alert>
    );
  }

  let startDate;
  let date = new Date(start);
  startDate = date.toLocaleString();

  let endDate;
  let dateEnd = new Date(end);
  endDate = dateEnd.toLocaleString();

  if (events.length === 0) {
    return <div>No events availble at this time. Try adding one!</div>;
  }

  return (
    <Card>
      <Card.Header>
        <Card.Title>{name.toUpperCase()}</Card.Title>
      </Card.Header>
      <Card.Body>
        <Card.Subtitle className="mb-2 text-muted">{category}</Card.Subtitle>
        <Card.Subtitle
          style={{ textTransform: "capitalize" }}
          className="mb-2 text-muted"
        >
          Location: {location}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          Address: {addressInfo}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          Start Time: {startDate}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          End Time: {endDate}
        </Card.Subtitle>
        <Card.Subtitle className="mb-2 text-muted">
          People Going: {attendingId.length} / {groupSize}
        </Card.Subtitle>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <Link
          onClick={() => setCurrent(event)}
          to="/view"
          className="card-link"
        >
          View
        </Link>

        {user._id === event.user && (
          <Fragment>
            <Link
              onClick={() => setCurrent(event)}
              to="/create"
              className="card-link"
            >
              Edit
            </Link>

            <Button
              style={{ float: "right" }}
              className="btn-danger"
              size="sm"
              onClick={() => setShowAlert(true)}
            >
              Delete
            </Button>
          </Fragment>
        )}
      </Card.Footer>
    </Card>
  );
};

export default EventItem;
