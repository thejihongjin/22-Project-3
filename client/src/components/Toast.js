import React, { Fragment } from "react";
import Toast from "react-bootstrap/Toast";

const JoinToast = props => {
    console.log(props.showToast);
    
    return (
        <Fragment>
            <br />
            <Toast
                onClose={() => props.setShowToast(false)}
                show={props.showToast}
                // delay={3000}
                // autohide
                // style={{ position: "absolute", bottom: 25, right: 25 }}
                style={{float: "right"}}
            >
                <Toast.Header>
                    <strong className="mr-auto">EVENT JOINED!</strong>
                </Toast.Header>
                {/* <Toast.Body></Toast.Body> */}
            </Toast>
        </Fragment>
    );
};

export default JoinToast;
