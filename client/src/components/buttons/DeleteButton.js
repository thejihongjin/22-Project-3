import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

const DeleteButton = props => {
    return (
        // <Button
        //     style={{ float: "right" }}
        //     className="btn-danger"
        //     size="sm"
        //     onClick={() => setShowAlert(true)}
        // >
        //     Delete
        // </Button>
        <Fragment>
        {/* <Link className="card-link" to="/create" onClick={() => props.setCurrent(props.event)}>Edit</Link>
        <Button className="btn-danger" onClick={() => props.setShowAlert(true)} style={{ float: "right" }}>Delete</Button> */}
            <Link className="card-link" to="/create">Edit</Link>
            <Button className="btn-danger" size="sm" style={{ float: "right" }}>Delete</Button>
        </Fragment>
    );
}

export default DeleteButton;