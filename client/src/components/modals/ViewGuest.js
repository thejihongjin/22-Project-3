import React from "react";
import Modal from "react-bootstrap/Modal"

const ViewGuest = (props) => {
    const user = props.data
    console.log(props)
    console.log(props.data)
    return (
      <React.Fragment>
        <Modal.Header closeButton>
          <Modal.Title>{user.displayname}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <span><strong>Bio: </strong></span>
          <p>{user.bio}</p>
        </Modal.Body>
      </React.Fragment>
    )
}

export default ViewGuest;