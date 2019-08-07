import React from "react";
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button";

const Footer = () => (
    // <footer className="footer">
    // <span>Avaline Ai <a href="https://www.linkedin.com/in/avaline-ai-b94b89178/">LinkedIn</a></span><br />
    // <span>Anh Dao <a href="https://www.linkedin.com/in/anh-dao-ab982117a/">LinkedIn</a></span><br />
    // <span>Jihong Jin <a href="https://www.linkedin.com/in/thejihongjin/">LinkedIn</a></span><br />
    // <span>Terrance Lyttles <a href="https://www.linkedin.com/in/terrance-lyttles-32b617173/">LinkedIn</a></span>


    // </footer>
    <Accordion className="footer">
        <Card>
            <Card.Header style={{ backgroundColor: "white" }} >
                <Accordion.Toggle style={{ textDecoration: "none" }} as={Button} variant="link" eventKey="0">
                    2019 Lonely Friend Finder - Contact Us
        </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
                <Card.Body>

                    <span>Avaline Ai <a href="https://www.linkedin.com/in/avaline-ai-b94b89178/">LinkedIn</a></span><br />
                    <span>Anh Dao <a href="https://www.linkedin.com/in/anh-dao-ab982117a/">LinkedIn</a></span><br />
                    <span>Jihong Jin <a href="https://www.linkedin.com/in/thejihongjin/">LinkedIn</a></span><br />
                    <span>Terrance Lyttles <a href="https://www.linkedin.com/in/terrance-lyttles-32b617173/">LinkedIn</a></span>
                </Card.Body>
            </Accordion.Collapse>
        </Card>
    </Accordion>
);

export default Footer;