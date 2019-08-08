import React from "react";
import Button from "react-bootstrap/Button";

const JoinButton = props => {
    return (
        // <Button
        //   type="submit"
        //   style={{ float: "right" }}
        //   className="btn-success"
        //   size="sm"
        //   onClick={() => props.handleJoin()}
        // >
        //   + Join
        // </Button>

        <Button type="submit" className="btn-success" onClick={() => props.handleJoin()}>+ Join</Button>
    );
}

export default JoinButton;