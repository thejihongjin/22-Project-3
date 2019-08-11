import React from "react";
import Button from "react-bootstrap/Button";
import EventAPI from "../../utils/EventAPI";

const LeaveButton = props => {
    const user = props.user;
    const event = props.event;

    const handleUnjoin = eventInfo => {
        EventAPI.leaveEvent(eventInfo._id)
            .then(() => window.location.reload());
                // () => EventAPI.getEvents().then(() => console.log("second then")));
    //     unjoinEvent(event);
    //     setJoined(false);
    //     setEvent(urlId);
    //     getUsersProfile(urlId);
        // console.log("unjoin from leave button", eventInfo);
    };

    
    return (
        <Button type="submit" className="btn-warning" onClick={() => handleUnjoin(event)} size="sm" style={{ float: "right" }}>- Leave Event</Button>
    );
}

export default LeaveButton;