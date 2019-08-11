import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const DeleteButton = props => {

    return (
        <Fragment>
            <Link className="card-link" to={`/event/${props.event._id}/edit`}>Edit</Link>
            <Button className="btn-danger" onClick={() => props.setShowAlert(true)} size="sm" style={{ float: "right" }}>Delete</Button>
        </Fragment>
    );
}

export default DeleteButton;