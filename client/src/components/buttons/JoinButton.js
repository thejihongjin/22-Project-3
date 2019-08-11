import React from "react";
import Button from "react-bootstrap/Button";
import EventAPI from "../../utils/EventAPI";

const JoinButton = props => {
    const user = props.user;
    const event = props.event;

    const handleJoin = (eventInfo, setShowToast) => {
        if (eventInfo.groupSize !== "Any" && parseInt(eventInfo.groupSize) === eventInfo.attendingId.length) {
            alert("Sorry, this event is full. 😟");
        } else {
            EventAPI.joinEvent(eventInfo._id).then(() => setShowToast(true));
            //       setEvent(urlId);
            //       getUsersProfile(urlId);
        }
    };

    return (
        <Button type="submit" className="btn-success" onClick={() => handleJoin(event, props.setShowToast)} size="sm" style={{ float: "right" }}>+ Join</Button>
    );
}

export default JoinButton;