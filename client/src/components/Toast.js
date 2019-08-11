import React from "react";
import Toast from "react-bootstrap/Toast";

const JoinToast = props => {
    // console.log(props.event);

    return (
        <Toast
            onClose={() => props.setShowToast(false)}
            show={props.showToast}
            delay={3000}
            autohide
        >
            <Toast.Header>
                <strong className="mr-auto">{props.event.name.toUpperCase()}</strong>
            </Toast.Header>
            <Toast.Body>Event Joined!</Toast.Body>
        </Toast>
    );
};

export default JoinToast;
