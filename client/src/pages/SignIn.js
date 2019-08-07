import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/auth/authContext";
import history from "../utils/history";
import Row from "react-bootstrap/Row";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

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
            <Form.Group controlId="signInEmail">
                <Form.Label>Email: </Form.Label>
                <Form.Control
                    type="text"
                    placeholder="Email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                />
            </Form.Group>
            <Form.Group controlId="signInPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
            </Form.Group>
            <Row className="justify-content-center">
                <Button type="submit" variant="primary" style={{ margin: "0 5px" }}>Sign In</Button>
                <Button onClick={props.onHide} varient="danger" style={{ margin: "0 5px" }}>Cancel</Button>
            </Row>
        </Form>
    );
};

export default SignIn;