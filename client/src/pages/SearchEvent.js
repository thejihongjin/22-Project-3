import React, { useContext, useEffect, useRef, Fragment } from "react";
import AuthContext from "../context/auth/authContext";
import EventContext from "../context/event/eventContext";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import CardColumns from "react-bootstrap/CardColumns";
import Button from "react-bootstrap/Button";
import Loading from "../components/Loading";
// import history from "../utils/history";


import EventCardPreview from "../components/events/EventCardPreview";

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
        clearUsers,
        clearCurrent,
        filterEvents,
        clearFilter,
        events,
        filtered
    } = eventContext;
    console.log(events);

    useEffect(() => {
        getEvents();
        clearUsers()
        clearCurrent()
        // eslint-disable-next-line
    }, []);

    const handleChange = e => {
        if (text.current.value !== "") {
            filterEvents(e.target.value);
        } else {
            clearFilter();
        }
    };
    // const eventCategories = ["Movie","Concert","Food/Drink","Bar/Club","Gaming","Coding","Party","Conversation","Other"];

    if (!events) {
        return <Loading />;
    }
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
                        { /*<Form.Group controlId="exampleForm.ControlSelect2">
              <Form.Label>Category</Form.Label>
              <Form.Control as="select" multiple>
                {eventCategories.map((category, i) => (
                  <option key={i}>{category}</option>
                ))}
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
                        {
                            events === null
                                ? <div>No Events Available</div>
                                : filtered !== null
                                    ? filtered.map(event => <EventCardPreview key={event._id} event={event} user={user} />)
                                    : events.map(event => <EventCardPreview key={event._id} event={event} user={user} />)
                        }
                    </CardColumns>
                </Card.Body>
            </Card>
        </Fragment>
    );
};

export default SearchEvent;