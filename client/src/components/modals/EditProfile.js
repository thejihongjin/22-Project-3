import React from "react"

const EditProfileModal = (props) => {
    const user = props.data
    const handleHide = props.handleHideFunction
    const handleSubmit = props.handleProfileSumbit
    return(
        <Modal
            show={props.modalShow}
            onHide={() => handleHide()}
            size="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="Tittle">Edit Profile</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={handleSubmit}>
                    <Form.Row>
                        <Form.Group as={Col} controlId="changeFirstName">
                            <Form.Label>First Name</Form.Label>
                            <Form.Control
                                name="firstname"
                                onChange={e => {
                                    setFirstName(e.target.value);
                                }}
                                defaultValue={user && user.firstname}
                            />
                        </Form.Group>
                        <Form.Group as={Col} controlId="changeLastName">
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control
                                name="lastname"
                                onChange={e => setLastName(e.target.value)}
                                defaultValue={user && user.lastname}
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group>
                        <Form.Label>Display Name</Form.Label>
                        <Form.Control
                            name="displayname"
                            onChange={e => setDisplayName(e.target.value)}
                            defaultValue={user && user.displayname}
                        />
                        {/* add subtitle */}
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Image</Form.Label>
                        <Form.Control
                            type="text"
                            onChange={e => setImage(e.target.value)}
                            // defaultValue={user && user.image}
                            defaultValue="https://via.placeholder.com/300x150"
                        />
                    </Form.Group>

                    <Form.Group>
                        <Form.Label>Bio</Form.Label>
                        <Form.Control
                            type="text"
                            onChange={e => setBio(e.target.value)}
                            defaultValue={user && user.bio}
                        />
                    </Form.Group>

                    <Form.Group controlId="changeEmail">
                        <Form.Label>Change Email</Form.Label>
                        <Form.Control
                            type="email"
                            defaultValue={user && user.email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Button type="submit">Submit</Button>
                    <Button onClick={() => handleHide()}>Cancel</Button>
                </Form>
            </Modal.Body>
        </Modal>
    )
}

export default EditProfileModal