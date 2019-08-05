import React, { Fragment, useContext, useRef, useEffect } from "react";
import EventContext from "../context/event/eventContext";
import EventItem from "../components/events/EventItem";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Navigation from "../components/Navigation";

const SearchEvent = () => {
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
  console.log(events);

  //const text = useRef("");

  useEffect(() => {
    getEvents();
    // eslint-disable-next-line
  }, []);

  // const handleChange = e => {
  //   if (text.current.value !== "") {
  //     filterEvents(e.target.value);
  //   } else {
  //     clearFilter();
  //   }
  // };
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
              <Form.Control type="text" />
            </Form.Group>
            <Form.Group controlId="exampleForm.ControlSelect2">
              <Form.Label>Category</Form.Label>
              <Form.Control as="select" multiple>
                {eventCategories.map((category, i) => (
                  <option key={i}>{category}</option>
                ))}
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
      {events ? (
        <div>
          {events.map(event => (
            <EventItem key={event._id} event={event} />
          ))}
          
        </div>
      ) : (
        <div>No events available</div>
      )}
      {/* map over events meeting parameters in cards - look into pagination */}

      {/* div holding searched events? */}

      {/* <Card style={cardStyle}>
        <Card.Body>
          <Card.Title>Search Results</Card.Title>
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
};

export default SearchEvent;
