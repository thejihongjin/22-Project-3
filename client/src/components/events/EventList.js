import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/auth/authContext";
import EventContext from "../../context/event/eventContext";
import EventCardPreview from "./EventCardPreview";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const EventList = () => { // rename as UserEvents
    const eventContext = useContext(EventContext);
    const authContext = useContext(AuthContext);
    const { user } = authContext;
    const { events, getUserEvents } = eventContext;

    let upcomingEvents;
    let pastEvents;

    useEffect(() => {
        getUserEvents();
        // eslint-disable-next-line
    }, []);

    if (events === null) {
        return (
            <div>
                <br /> <h4>Welcome! Try adding an event</h4>
            </div>
        );
    } else {
        upcomingEvents = events.filter(event => new Date(event.end) > new Date());
        pastEvents = events.filter(event => new Date(event.end) < new Date());
    }


    return (
        <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
            <Tab eventKey="home" title="Upcoming Events">
                <br />
                {
                    upcomingEvents.map(event => <EventCardPreview key={event._id} user={user} event={event} />)
                }
            </Tab>
            <Tab eventKey="profile" title="Past Events">
                <br />
                {
                    pastEvents.map(event => <EventCardPreview key={event._id} user={user} event={event} />)
                }
            </Tab>
        </Tabs>
    );
};

export default EventList;
