import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import EventContext from "../../context/event/eventContext";
import AuthContext from "../../context/auth/authContext";

const EventItem = ({ event }) => {
  const eventContext = useContext(EventContext);
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  const { deleteEvent, setCurrent, clearCurrent, updateEvent } = eventContext;
  const {
    _id,
    name,
    location,
    category,
    description,
    addressInfo,
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
  // console.log(date.toString('YYYY-MM-dd'))

  let endDate;
  let dateEnd = new Date(end);
  endDate = dateEnd.toLocaleString();

  return (
    <div>
      <Card style={{ width: "25rem" }}>
        {" "}
        <Card.Body>
          <Card.Title>{name.toUpperCase()}</Card.Title>
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
          <Card.Text>{description}</Card.Text>
          <Link
            onClick={() => setCurrent(event)}
            to="/create"
            className="card-link"
          >
            Edit
          </Link>
          <Link
            onClick={() => setCurrent(event)}
            to="/view"
            className="card-link"
          >
            View
          </Link>

          {user ? (
            <Button
              style={{ float: "right" }}
              className="btn-danger"
              size="sm"
              onClick={() => setShowAlert(true)}
            >
              Delete
            </Button>
          ) : (
            <Button
              style={{ float: "right" }}
              className="btn-info"
              size="sm"
              onClick={() => setShowAlert(true)}
            >
              Join
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default EventItem;
