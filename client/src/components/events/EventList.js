import React, { Fragment, useContext, useEffect } from "react";
import EventItem from "./EventItem";
import EventContext from "../../context/event/eventContext";
import AuthContext from "../../context/auth/authContext";

const EventList = () => {
  const eventContext = useContext(EventContext);
  const authContext = useContext(AuthContext);
  const { user } = authContext;
  const { events, getUserEvents } = eventContext;
  console.log(events)
  let createdEvent;
  let joinedEvent;

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
        {" "}
        <h4>Please add a event</h4>
      </div>
    );
  } else {
    createdEvent = events.filter(event => event.user === user._id);
    joinedEvent = events.filter(event => event.user !== user._id);
  }

  console.log(joinedEvent);

  return (
    <Fragment>
      <div>
        <h6>Your Created Events:</h6>
        {createdEvent.map(event => (
          <EventItem key={event._id} event={event} />
        ))}
      </div>{" "}
      <br/>
      <div>
        <h6>Your Joined Events</h6>
        {joinedEvent.map(joined => (
          <EventItem key={joined._id} event={joined} />
        ))}
      </div>
    </Fragment>
  );
};

export default EventList;
