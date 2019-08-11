import React, { useContext, useEffect, useRef, useState, Fragment } from "react";
import AuthContext from "../context/auth/authContext";
import EventContext from "../context/event/eventContext";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import CardColumns from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";
// import Loading from "../components/Loading";
// import history from "../utils/history";

import EventCard from "../components/events/EventCard";
import Toast from "../components/Toast";

const SearchEvent = () => {
  useEffect(() => {
    if (!user) {
      authContext.loadUser();
    }
  });
  const authContext = useContext(AuthContext);
  const { user
    // , isAuthenticated 
  } = authContext;
  const text = useRef("");
  const eventContext = useContext(EventContext);
  const {
    setCurrent,
    getEvents,
    // clearUsers,
    clearEvents,
    filterEvents,
    clearFilter,
    events,
    filtered
  } = eventContext;
  console.log(events);

  useEffect(() => {
    clearEvents();
    getEvents();
    // clearUsers();

    // eslint-disable-next-line
  }, []);

  const handleChange = e => {
    if (text.current.value !== "") {
      filterEvents(e.target.value);
    } else {
      clearFilter();
    }
  };

  const [showAddress] = useState("hide");
  const [showViewLink] = useState("show");

  const [showToast, setShowToast] = useState(false);

  return (
    <Fragment>
      {/* search bar - event name, category, time frame, distance (google api) */}
      <Card>
        <Card.Body>
          <Card.Title>Event Search</Card.Title>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control ref={text} onChange={handleChange} />
            </Form.Group>
            {/*<Form.Group controlId="exampleForm.ControlSelect2">
              <Form.Label>Category</Form.Label>
              <Form.Control as="select" multiple>
                {eventCategories.map((category, i) => <option key={i}>{category}</option>)}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Location</Form.Label> {/* need to link google api /}
              <Form.Control type="text" />
            </Form.Group>
            /* ADD TIME RANGE */}
            <Button className="float-right">Search</Button>
          </Form>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>Results</Card.Title>
          <CardColumns>
            {events === null ? (
              <div>No Events Available</div>
            ) : filtered !== null ? (
              filtered.map(event => (
                <EventCard key={event._id} event={event} user={user} showAddress={showAddress} showViewLink={showViewLink} setShowToast={setShowToast} />
              ))
            ) : (
              events.map(event => (
                <EventCard key={event._id} event={event} user={user} showAddress={showAddress} showViewLink={showViewLink} setShowToast={setShowToast} />
              ))
            )}
          </CardColumns>
        </Card.Body>
      </Card>
      <Toast showToast={showToast} setShowToast={setShowToast} />
    </Fragment>
  );
};

export default SearchEvent;
