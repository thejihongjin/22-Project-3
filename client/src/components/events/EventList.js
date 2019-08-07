import React, { Fragment, useContext, useEffect } from "react";
import EventItem from "./EventItem";
import EventContext from "../../context/event/eventContext";
import AuthContext from "../../context/auth/authContext";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

const EventList = () => {
  const eventContext = useContext(EventContext);
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  const { events, getUserEvents } = eventContext;
  console.log(events);
  let createdEvent;
  let joinedEvent;
  let pastEvents;

  useEffect(() => {
    getUserEvents();

    //displayEvent({...userEvent, createdEvents: events.filter(event => event.user === user._id})
    // if (events) {

    //state.joinedEvents = events.filter(event => event.user !== user._id);
    // }
    // eslint-disable-next-line
  }, []);

  if (events === null) {
    return (
      <div>
        <br /> <h4>Welcome! Try adding an event</h4>
      </div>
    );
  } else {
    createdEvent = events.filter(
      event => event.user === user._id && new Date(event.end) > new Date()
    );
    joinedEvent = events.filter(
      event => event.user !== user._id && new Date(event.end) > new Date()
    );
    pastEvents = events.filter(event => new Date(event.end) < new Date());
  }

  console.log(pastEvents);
  console.log(Date());

  return (
    <Tabs defaultActiveKey="home" id="uncontrolled-tab-example">
      <Tab eventKey="home" title="Upcoming Events">
        <br />
        <Fragment>
          <div>
            <h6>Your Created Events:</h6>
            {createdEvent.map(event => (
              <EventItem key={event._id} event={event} />
            ))}
          </div>{" "}
          <br />
          <div>
            <h6>Your Joined Events</h6>
            {joinedEvent.map(joined => (
              <EventItem key={joined._id} event={joined} />
            ))}
          </div>
        </Fragment>
      </Tab>
      <Tab eventKey="profile" title="Past Events">
        <br />
        <Fragment>
          {pastEvents.map(past => (
            <EventItem key={past._id} event={past} />
          ))}{" "}
        </Fragment>
      </Tab>
    </Tabs>
  );
};

export default EventList;
