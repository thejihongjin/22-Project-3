import React, { useContext, useEffect, useRef } from "react";
import EventContext from "../context/event/eventContext";
import EventItem from "../components/events/EventItem";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import AuthContext from "../context/auth/authContext";
import Button from "react-bootstrap/Button";
import Navigation from "../components/Navigation";
import Loading from "../components/Loading";
import history from "../utils/history";

const SearchEvent = () => {
  useEffect(() => {
    if (!user) {
      authContext.loadUser();
    }
  });
  const authContext = useContext(AuthContext);
  const { user, isAuthenticated } = authContext;
  const text = useRef("");
  const eventContext = useContext(EventContext);
  const {
    getEvents,
    filterEvents,
    clearFilter,
    events,
    filtered
  } = eventContext;
  console.log(events);

  useEffect(() => {
    getEvents();
    // eslint-disable-next-line
  }, []);

  const handleChange = e => {
    if (text.current.value !== "") {
      filterEvents(e.target.value);
    } else {
      clearFilter();
    }
  };
  const eventCategories = [
    "Movie",
    "Concert",
    "Food/Drink",
    "Bar/Club",
    "Gaming",
    "Coding",
    "Party",
    "Conversation",
    "Other"
  ];

  if (!events) {
    return <Loading />;
  }
  console.log(events);

  return (
    <div style={{ margin: "0 auto" }}>
      {/* navbar - HOME/OTHER NAV LINKS */}
      {/* search bar - event name, category, time frame, distance (google api) */}
      <Navigation />
      <Card style={{ width: "73%", margin: "0 auto" }}>
        <Card.Body>
          <Card.Title>Event Search</Card.Title>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control ref={text} onChange={handleChange} />
            </Form.Group>
            {/* <Form.Group controlId="exampleForm.ControlSelect2">
              <Form.Label>Category</Form.Label>
              <Form.Control as="select" multiple>
                {eventCategories.map((category, i) => (
                  <option key={i}>{category}</option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Location</Form.Label>  */}
            {/* need to link google api */}
            {/* <Form.Control type="text" />
            </Form.Group> */}
            {/* ADD TIME RANGE */}
            {/* <Button className="float-right">Search</Button> */}
          </Form>
          <div>
            {" "}
            {events === null ? (
              <div>No Events Available</div>
            ) : filtered !== null ? (
              filtered.map(event => <EventItem key={event._id} event={event} />)
            ) : (
              events.map(event => <EventItem key={event._id} event={event} />)
            )}
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default SearchEvent;
