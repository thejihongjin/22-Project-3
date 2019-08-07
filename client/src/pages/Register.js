import React, { useState, useEffect, useContext } from "react";
import { Row, Form, Button } from "react-bootstrap";
import AuthContext from "../context/auth/authContext";
import history from "../utils/history";

const Register = props => {
    const authContext = useContext(AuthContext);
    const { register, error, clearErrors, isAuthenticated } = authContext;

    const [user, setUser] = useState({
        newUsername: "",
        newEmail: "",
        newPassword: "",
        passwordMatch: ""
    });
    const { newUsername, newEmail, newPassword, passwordMatch } = user;

    useEffect(() => {
        if (isAuthenticated) {
            // redirect to userpage
            history.push("/user");
        }

        if (error === "User already exists") {
            alert("User already exists");
            clearErrors();
        }
        // eslint-disable-next-line
    }, [error, isAuthenticated]);

    const handleChange = e =>
        setUser({ ...user, [e.target.name]: e.target.value });

    const handleSubmit = e => {
        e.preventDefault();
        if (newUsername === "" || newEmail === "" || newPassword === "") {
            alert("Please enter all fields");
        } else if (newPassword !== passwordMatch) {
            alert("Passwords do not match");
        } else {
            register({
                username: newUsername,
                displayname: newUsername,
                email: newEmail,
                password: passwordMatch
            });
            props.onHide();
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="registerUsername">
                <Form.Label>Username: </Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Username"
                    name="newUsername"
                    value={newUsername}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group controlId="registerEmail">
                <Form.Label>Email:</Form.Label>
                <Form.Control
                    type="email"
                    placeholder="Email"
                    name="newEmail"
                    value={newEmail}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group controlId="registerPassword">
                <Form.Label>Password:</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    name="newPassword"
                    value={newPassword}
                    onChange={handleChange}
                />
            </Form.Group>
            <Form.Group controlId="registerPasswordMatch">
                <Form.Label>Re-type Password:</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Type in your password again"
                    name="passwordMatch"
                    value={passwordMatch}
                    onChange={handleChange}
                />
            </Form.Group>
            <Row className="justify-content-center">
                <Button type="submit" variant="primary" style={{ margin: "0 5px" }}>Register</Button>
                <Button onClick={props.onHide} varient="danger" style={{ margin: "0 5px" }}>Cancel</Button>
            </Row>
        </Form>
    );
};

export default Register;
