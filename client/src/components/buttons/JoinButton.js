import React from "react";
import Button from "react-bootstrap/Button";
import API from "../../utils/API";

const JoinButton = props => {
    const user = props.user;
    const event = props.event;

    const handleJoin = eventInfo => {
        if (eventInfo.groupSize !== "Any" && parseInt(eventInfo.groupSize) === eventInfo.attendingId.length) {
            alert("Sorry, this event is full. 😟");
        } else {
            // API.joinEvent(eventInfo._id);
            //       joinEvent(event);
            //       setShowToast(true);
            //       setEvent(urlId);
            //       getUsersProfile(urlId);
            console.log("join from event card preview event id", eventInfo);
        }
    };

    return (
        <Button type="submit" className="btn-success" onClick={() => handleJoin(event)} size="sm" style={{ float: "right" }}>+ Join</Button>
    );
}

export default JoinButton;