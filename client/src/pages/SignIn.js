import React, { useState, useEffect, useContext } from "react";
import {  Row, Form, Button } from "react-bootstrap";
import AuthContext from "../context/auth/authContext";
import history from "../utils/history";

const SignIn = props => {
    const authContext = useContext(AuthContext);
    const { login, error, clearErrors, isAuthenticated } = authContext;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
        if (isAuthenticated) {
            history.push("/user");
        }

        if (error === "Invalid Credentials") {
            alert("Email or Password is incorrect");
            clearErrors();
        }
    }, [error, isAuthenticated, clearErrors]);

    const handleSubmit = e => {
        e.preventDefault();
        if (email === "" || password === "") {
            alert("Please input both email and password.");
        } else {
            login({
                email: email,
                password: password
            });
            props.onHide();
        }
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group controlId="signInUser">
                <Form.Label>Email: </Form.Label>
                <Form.Control
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    type="text"
                    placeholder="Email"
                />
            </Form.Group>
            <Form.Group controlId="signInPass">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password"
                    placeholder="Password"
                />
            </Form.Group>
            <Row className="justify-content-center">
                <Button variant="primary" type="submit" style={{ margin: "0 5px" }}>Sign In</Button>
                <Button onClick={props.onHide} varient="danger" style={{ margin: "0 5px" }}>Cancel</Button>
            </Row>
        </Form>
    );
};

export default SignIn;
