import React from "react";
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

        <Button className="btn-danger" onClick={() => props.setShowAlert(true)}>Delete</Button>
    );
}

export default DeleteButton;