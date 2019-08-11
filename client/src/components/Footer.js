import React from "react";
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";

const Footer = () => (
    // <Accordion className="footer">
    //     <Card>
    //         <Card.Header style={{ backgroundColor: "white" }} >
    //             <Accordion.Toggle style={{ textDecoration: "none" }} as={Button} variant="link" eventKey="0">
    //         </Card.Header>
    //         <Accordion.Collapse eventKey="0">
    //             <Card.Body>
                // <span><a href="/about">About Us</a></span><br />
                    <footer className="footer">
                        © 2019 Lonely Friend Finder - <a href="/About"> About Us</a>
                    </footer>
                /* </Card.Body>
            </Accordion.Collapse>
        </Card>
    </Accordion> */
);

export default Footer;