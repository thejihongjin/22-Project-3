import React, { useState, Fragment } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import Button from "react-bootstrap/Button";
import DeleteButton from "../buttons/DeleteButton";
import JoinButton from "../buttons/JoinButton";
import LeaveButton from "../buttons/LeaveButton";

const EventCardPreview = props => {
    const user = props.user;
    const event = props.event;
    const showAddress = props.showAddress;
    const showViewLink = props.showViewLink;
    let eventAddress;
    let viewLink;

    const [showAlert, setShowAlert] = useState(false);
    const handleDelete = () => {
        console.log("delete from event card preview");
        setShowAlert(false);
        // deleteEvent(current._id);
        // clearCurrent();
        // clearUsers();
        // history.push("/user");
    };
    const handleJoin = () => {
        console.log("join from event card preview");
    };
    const handleUnjoin = () => {
        console.log("unjoin from event card preview");
    };

    // <DeleteButton setCurrent={setCurrent} setShowAlert={setShowAlert} />

    if (showAlert) {
        return (
            // <Card style={{ width: "25rem" }}>
            // <Card>
            <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
                <Alert.Heading>Are you sure you want to delete this event?</Alert.Heading>
                <Button className="btn-danger" onClick={handleDelete}>Yes</Button>
            </Alert>
            // </Card>
        );
    }

    if (showAddress === "show") {
        eventAddress = event.addressInfo
            ? <Fragment>{"Address: " + event.addressInfo}<br /></Fragment>
            : <Fragment>{"Address: N/A"}<br /></Fragment>;
    } else if (showAddress === "hide") {
        eventAddress = <Fragment />;
    }

    if (showViewLink === "show") {
        viewLink = <Link to={`/view/${event._id}`} className="card-link">View</Link>; // change to event/:id
    } else if (showViewLink === "hide") {
        viewLink = <Fragment />;
    }

    return (
        <Fragment>
            {event.name && (
                <Card>
                    <Card.Header style={{ background: "#343a40", color: "white" }}>
                        <Card.Title>preview {event.name.toUpperCase()}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                            {event.category}
                        </Card.Subtitle>
                    </Card.Header>
                    <Card.Body>
                        <Card.Text style={{ textTransform: "capitalize" }}>
                            Location: {event.location}<br />
                            {eventAddress}
                            Start: {event.start}<br />
                            End: {event.end}
                        </Card.Text>
                        <Card.Subtitle className="mb-2 text-muted">
                            People Going: {event.attendingId.length} / {event.groupSize}
                        </Card.Subtitle>
                    </Card.Body>
                    <Card.Footer style={{ background: "#343a40", color: "white" }}>
                        { viewLink }
                        {user._id === event.user && (
                            <Fragment>
                                {/* <Link className="card-link" to="/create" onClick={() => props.setCurrent(event._id)}>Edit</Link> */}
                                <DeleteButton
                                    // setCurrent={setCurrent}
                                    setShowAlert={setShowAlert} />
                            </Fragment>
                        )}

                        {user._id !== event.user && !event.attendingId.includes(user._id) && <JoinButton handleJoin={handleJoin} />}
                        {event.user !== user._id && event.attendingId.includes(user._id) && <LeaveButton handleUnjoin={handleUnjoin} />}
                    </Card.Footer>
                </Card>
            )}
        </Fragment>
    );
};

export default EventCardPreview;
