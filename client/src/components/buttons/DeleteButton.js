import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
// import Alert from "react-bootstrap/Alert";

const DeleteButton = props => {

    return (
        <Fragment>
        {/* <Link className="card-link" to="/create" onClick={() => props.setCurrent(props.event)}>Edit</Link> */}
            <Link className="card-link" to={`/event/${props.event._id}/edit`}>Edit</Link>
            <Button className="btn-danger" onClick={() => props.setShowAlert(true)} size="sm" style={{ float: "right" }}>Delete</Button>
            {/* <Button className="btn-danger" onClick={() => setShowAlert(true)} size="sm" style={{ float: "right" }}>Delete</Button> */}
        </Fragment>
    );
}

export default DeleteButton;