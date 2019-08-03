import React, { Fragment, useContext, useEffect } from "react";
import EventItem from "./EventItem";
import EventContext from "../../context/event/eventContext";
import AuthContext from "../../context/auth/authContext";

const EventList = () => {
  const eventContext = useContext(EventContext);
  const authContext = useContext(AuthContext);
  //const { user } = authContext;

  const { events, getEvents } = eventContext;
  console.log(events);

  useEffect(() => {
    getEvents();
    // eslint-disable-next-line
  }, []);

  if (events === null) {
    return (
      <div>
        {" "}
        <h4>Please add a event</h4>
      </div>
    );
  }

  return (
    <Fragment>
      <h6>Your Created Events:</h6>
      {events
        .filter(event => event.user)
        .map(event => (
          <EventItem key={event._id} event={event} />
        ))}
      {/* <p>Your Joined Events</p>
      {events.filter(attend => attend.attendId === user._id).map(event => (
        <EventItem key={event.id} event={event} />
      ))} */}
    </Fragment>
  );
};

export default EventList;
