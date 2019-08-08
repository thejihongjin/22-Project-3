import React, { useState, useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import Card from "react-bootstrap/Card";
// import Button from "react-bootstrap/Button";
import JoinButton from "../buttons/JoinButton";
import LeaveButton from "../buttons/LeaveButton";
import DeleteButton from "../buttons/DeleteButton";

const EventCardPreview = props => {
    return (
        <Card>
            <Card.Header style={{ background: "#343a40", color: "white" }}>
                <Card.Title>{props.event.name.toUpperCase()}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{props.event.category}</Card.Subtitle>
            </Card.Header>
            <Card.Body>
                <Card.Text style={{ textTransform: "capitalize" }}>
                    Location: {props.event.location}<br />
                    Start: {props.event.start}<br />
                    End: {props.event.end}
                </Card.Text>
                <Card.Subtitle className="mb-2 text-muted">
                    People Going: {props.event.attendingId.length} / {props.event.groupSize}
                </Card.Subtitle>
            </Card.Body>
            <Card.Footer style={{ background: "#343a40", color: "white" }}>
                {/* <Link onClick={() => props.setCurrent(props.event)} to="/view" className="card-link">View</Link> */}
                <Link to="/view" className="card-link">View</Link>
                {
                    props.user._id === props.event.user &&
                    <Fragment>
                        {/* <Link className="card-link" to="/create" onClick={() => setCurrent(event)}>Edit</Link>
                        <Button className="btn-danger" size="sm" onClick={() => setShowAlert(true)} style={{ float: "right" }}>Delete</Button> */}
                        <DeleteButton />
                    </Fragment>
                }

                {
                    props.user._id !== props.event.user && !props.event.attendingId.includes(props.user._id) &&
                    // <Button style={{ float: "right" }} className="btn-info" size="sm" onClick={() => setShowAlert(true)}>Join</Button>
                    <JoinButton />
                }
                {
                    props.event.user !== props.user._id && props.event.attendingId.includes(props.user._id) &&
                    <LeaveButton />
                }
            </Card.Footer>
        </Card>
    );

}

export default EventCardPreview;