import React, { useContext, useState } from "react";
// import AuthContext from "../../context/auth/authContext";
import EventContext from "../../context/event/eventContext";
import EventCardPreview from "./EventCardPreview";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const EventList = props => { // rename as UserEvents
    const events = props.events
    const user = props.user

    const eventContext = useContext(EventContext);
    const { setCurrent } = eventContext;

    let upcomingEvents = events.filter(event => new Date(event.end) > new Date());
    let pastEvents = events.filter(event => new Date(event.end) < new Date());

    const [showAddress] = useState("hide");
    const [showViewLink] = useState("show");


    return (
        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Upcoming Events">
                <br />
                {
                    upcomingEvents.map(event => <EventCardPreview key={event._id} user={user} event={event} setCurrent={setCurrent} showAddress={showAddress} showViewLink={showViewLink} />)
                }
            </Tab>
            <Tab eventKey="profile" title="Past Events">
                <br />
                {
                    pastEvents.map(event => <EventCardPreview key={event._id} user={user} event={event} setCurrent={setCurrent} showAddress={showAddress} showViewLink={showViewLink} />)
                }
            </Tab>
        </Tabs>
    );
};

export default EventList;
