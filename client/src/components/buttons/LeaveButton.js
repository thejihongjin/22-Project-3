import React from "react";
import Button from "react-bootstrap/Button";

const LeaveButton = props => {
    return (
        // <Button
        //     type="submit"
        //     style={{ float: "right" }}
        //     className="btn-warning"
        //     size="sm"
        //     onClick={() => handleUnjoin()}
        // >
        //     - Leave Event
        // </Button>

        <Button type="submit" className="btn-warning" onClick={() => props.handleUnjoin()}>- Leave Event</Button>
    );
}

export default LeaveButton;