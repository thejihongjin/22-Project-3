import React, { Fragment, useContext, useRef, useEffect } from "react";
import EventContext from "../context/event/eventContext";
import EventItem from "../components/events/EventItem";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import Navigation from "../components/Navigation";
import Loading from "../components/Loading";
import history from "../utils/history";
import Container from "react-bootstrap/Container"
import CardDeck from "react-bootstrap/CardDeck"
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

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
  console.log(events)

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
  const eventCategories = ["Movie","Concert","Food/Drink","Bar/Club","Gaming","Coding","Party","Conversation","Other"];

  return (
      <React.Fragment>
      {/* navbar - HOME/OTHER NAV LINKS */}
      {/* search bar - event name, category, time frame, distance (google api) */}
      <Navigation />
      <Container>
        <Card style={{ width: "90%", margin: "0 auto" }}>
          <Card.Body>
            <Card.Title>Event Search</Card.Title>
            <Form>
              <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Label>Name</Form.Label>
                <Form.Control ref={text} onChange={handleChange} />
              </Form.Group>
            { /*<Form.Group controlId="exampleForm.ControlSelect2">
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
      <CardDeck>
        <Row className="mt-5 mb-5">
          {events === null ? (
            <div>No Events Available</div>
          ) : filtered !== null ? (
            filtered.map(event => <Col xs={12} sm={9} md={6} lg={4}><EventItem key={event._id} event={event} /></Col>)
          ) : (
            events.map(event => <Col xs={12} sm={9} md={6} lg={4}><EventItem key={event._id} event={event} /></Col>)
          )}
        </Row>
      </CardDeck>
    </Container>
    </React.Fragment>
  );
}

export default SearchEvent;
