import React, { useState, useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../context/auth/authContext";
import EventContext from "../../context/event/eventContext";
import Alert from "react-bootstrap/Alert";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const EventItem = ({ event }) => {
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
        return <div>No events available at this time. Try adding one!</div>;
    }

    return (
        <Card>
            <Card.Header style={{ background: "#343a40", color: "white" }}>
                <Card.Title>{name.toUpperCase()}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{category}</Card.Subtitle>
            </Card.Header>
            <Card.Body>
                <Card.Text style={{ textTransform: "capitalize" }}>
                    Location: {location}<br />
                    Address: {addressInfo}<br />
                    Start Time: {startDate}<br />
                    End Time: {endDate}
                </Card.Text>
                <Card.Text>{description}</Card.Text>
                <Card.Subtitle className="mb-2 text-muted">
                    People Going: {attendingId.length} / {groupSize}
                </Card.Subtitle>
            </Card.Body>
            <Card.Footer style={{ background: "#343a40", color: "white" }}>
                <Link onClick={() => setCurrent(event)} to="/view" className="card-link">View</Link>
                {
                    user._id === event.user &&
                    <Fragment>
                        <Link className="card-link" to="/create" onClick={() => setCurrent(event)}>Edit</Link>
                        <Button className="btn-danger" size="sm" onClick={() => setShowAlert(true)} style={{ float: "right" }}>Delete</Button>
                    </Fragment>
                }

                {
                    user._id !== event.user && !event.attendingId.includes(user._id) &&
                    <Button style={{ float: "right" }} className="btn-info" size="sm" onClick={() => setShowAlert(true)}>Join</Button>
                }
            </Card.Footer>
        </Card>
    );
};

export default EventItem;
