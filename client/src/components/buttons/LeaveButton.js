import React from "react";
import Button from "react-bootstrap/Button";
import API from "../../utils/API";

const LeaveButton = props => {
    const user = props.user;
    const event = props.event;

    const handleUnjoin = eventInfo => {
    //     unjoinEvent(event);
    //     setJoined(false);
    //     setEvent(urlId);
    //     getUsersProfile(urlId);
        console.log("unjoin from leave button", eventInfo);
    };

    
    return (
        <Button type="submit" className="btn-warning" onClick={() => handleUnjoin(event)} size="sm" style={{ float: "right" }}>- Leave Event</Button>
    );
}

export default LeaveButton;