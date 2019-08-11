import React, { Fragment } from "react";
import Card from "react-bootstrap/Card";
import CardColumns from "react-bootstrap/CardColumns";
// import Button from "react-bootstrap/Button";
// import Loading from "../components/Loading";
// import history from "../utils/history";
// import EventCard from "../components/events/EventCard";

const About = () => {

    return (
        <Fragment>
            {/* search bar - event name, category, time frame, distance (google api) */}
            <Card>
                <Card.Body>
                    <Card.Title>About Us</Card.Title>
                    <Card.Text>
                        Lonely Friend Finder is a platform for finding new friends. People use Lonely Friend Finder to meet people, get out of their comfort zones, and pursue their passions together.
                    </Card.Text>
                </Card.Body>
            </Card>

            <Card>
                <Card.Body>
                    <Card.Title>Meet the Team</Card.Title>

                    <CardColumns>
                        <Card>
                            <Card.Img variant="top" src="https://media.licdn.com/dms/image/C5603AQFsZCCKiVcpvQ/profile-displayphoto-shrink_200_200/0?e=1571270400&v=beta&t=mkc0RZfJF6AQe55BpPWtbVNCnmEf9eka6LVPOSpZO98" />
                            <Card.Body>
                                <Card.Title><span>Avaline Ai <a href="https://www.linkedin.com/in/avaline-ai-b94b89178/">LinkedIn</a></span><br /><span><a href="https://github.com/Avalineai">Github</a></span></Card.Title>
                                <Card.Text>
                                    Born in Beijing China, Avaline Ai immigrated to the states with her family and San Diego, CA became her home away from home. She found her passion for web development recently and spends her free time adventuring through the creative process.
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="https://media.licdn.com/dms/image/C5603AQETVCofC8eUSQ/profile-displayphoto-shrink_800_800/0?e=1571270400&v=beta&t=gHL6p5nOG1ko3qtAQEQXBLZLfxUjoe7m-ii-aPlgmOE" />
                            <Card.Body>
                                <Card.Title><span>Anh Dao <a href="https://www.linkedin.com/in/anh-dao-ab982117a/">LinkedIn</a></span><br /><span><a href="https://github.com/Adogeon">Github</a></span></Card.Title>
                                <Card.Text>
                                    Some Text
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="https://media.licdn.com/dms/image/C5603AQHr_0OZ55y6vQ/profile-displayphoto-shrink_800_800/0?e=1571270400&v=beta&t=i7MeeV01wmnwkCdQgARawRn8tLrA0zt2KjQ6LiNosZU" />
                            <Card.Body>
                                <Card.Title><span>Jihong Jin <a href="https://www.linkedin.com/in/thejihongjin/">LinkedIn</a></span><br /><span><a href="https://github.com/thejihongjin">Github</a></span></Card.Title>
                                <Card.Text>
                                    Some Text
                            </Card.Text>
                            </Card.Body>
                        </Card>
                        <Card>
                            <Card.Img variant="top" src="https://media.licdn.com/dms/image/C5603AQFhFgnqT_im7w/profile-displayphoto-shrink_800_800/0?e=1571270400&v=beta&t=Mo4tPM59VqgIBSi9C-m7BP1KNiJQBPHW3mwZDCymzCI" />
                            <Card.Body>
                                <Card.Title><span>Terrance Lyttles <a href="https://www.linkedin.com/in/terrance-lyttles-32b617173/">LinkedIn</a></span><span><a href="https://github.com/tjlyttles">Github</a></span></Card.Title>
                                <Card.Text>
                                    Some Text
                            </Card.Text>
                            </Card.Body>
                        </Card>
                    </CardColumns>






                </Card.Body>
            </Card>
        </Fragment>
    );
};

export default About;