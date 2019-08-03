import React, { Fragment, useContext, useRef, useEffect } from "react";
import EventContext from "../context/event/eventContext";
import EventItem from "../components/events/EventItem";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Navigation from "../components/Navigation";

function SearchEvent() {
  const cardStyle = {
    margin: "15px"
  };

  const eventContext = useContext(EventContext);
  const {
    filterEvents,
    getEvents,
    clearFilter,
    filtered,
    events
  } = eventContext;

  const text = useRef("");

  useEffect(() => {
    getEvents();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (filtered === null) {
      text.current.value = "";
    }
  });

  const handleChange = e => {
    if (text.current.value !== "") {
      filterEvents(e.target.value);
    } else {
      clearFilter();
    }
  };

  return (
    <div style={{ margin: "0 auto" }}>
      {/* navbar - HOME/OTHER NAV LINKS */}
      {/* search bar - event name, category, time frame, distance (google api) */}
      <Navigation />
      <Card style={{ margin: "25px" }}>
        <Card.Body>
          <Card.Title>Event Search</Card.Title>
          <Form>
            <Form.Group controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control ref={text} type="text" onChange={handleChange} />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2">
              <Form.Label>Category</Form.Label>
              <Form.Control as="select" multiple>
                <option>Movie</option>
                <option>Concert</option>
                <option>Food/Drink</option>
                <option>Bar/Club</option>
                <option>Gaming</option>
                <option>Coding</option>
                <option>Party</option>
                <option>Conversation</option>
                <option>Other</option>
              </Form.Control>
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label>Location</Form.Label> {/* need to link google api */}
              <Form.Control type="text" />
            </Form.Group>
            {/* ADD TIME RANGE */}
            <Button className="float-right">Search</Button>
          </Form>
        </Card.Body>
      </Card>
      <div>
        <Fragment>
          {events.map(event => (
            <EventItem key={event.id} event={event} />
          ))}
          {/* <p>Your Joined Events</p>
      {events.filter(attend => attend.attendId === user._id).map(event => (
        <EventItem key={event.id} event={event} />
      ))} */}
        </Fragment>
      </div>
      {/* map over events meeting parameters in cards - look into pagination */}

      {/* div holding searched events? */}

      {/* <Card style={cardStyle}>
        <Card.Body>
          <Card style={cardStyle}>
            <Card.Body>
              <div className="float-right">
                <Button>View</Button> <Button>Join</Button>
              </div>
              <Card.Title>Name</Card.Title>
              <Card.Text>Date</Card.Text>
            </Card.Body>
          </Card>
          <Card style={cardStyle}>
            <Card.Body>
              <div className="float-right">
                <Button>View</Button> <Button>Join</Button>
              </div>
              <Card.Title>Name</Card.Title>
              <Card.Text>Date</Card.Text>
            </Card.Body>
          </Card>
        </Card.Body>
      </Card> */}
    </div>
  );
}

export default SearchEvent;
