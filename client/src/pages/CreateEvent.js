// import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Card from "react-bootstrap/Card";
import Grid from "@material-ui/core/Grid";
import DateFnsUtils from "@date-io/date-fns";
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker
} from "@material-ui/pickers";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import GeocodeForm from "../components/GeocodeForm";
import API from "../utils/API";
import history from "../utils/history";
import { useUserContext } from "../utils/userContext";
import React, { useState } from "react";
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import Map from "../components/Map";

const useStyles = {
  grid: {
    width: "30%"
  },
  flexBetween: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between"
  },
  flexEvenly: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-evenly"
  },
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  fontSize: {}
};

export default function CreateEvent() {
  const [state, dispatch] = useUserContext();
  // const [todayDate, setDate] = useState(new Date());
  // const [todayTime, setTime] = useState(new Date());

  // function handleDate(date) {
  //   setDate(date);
  // }
  // function handleTime(date) {
  //   setTime(date);
  // }

  const [event, setEvent] = useState({
    eventName: "",
    eventLocation: "",
    category: "",
    groupSize: "",
    eventDetails: ""
  });

  const { eventName, eventLocation, category, groupSize, eventDetails } = event;

  const handleChange = e => {
    console.log(e.target.value);
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(state.user);
    API.createEvent({
      name: eventName,
      location: eventLocation,
      groupSize: groupSize,
      description: eventDetails,
      category: category,
      user: state.user._id
    })
      .then(dataform => console.log(dataform))
      .then(history.push("/user"));
  };
  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroup-sizing-default">
                        Event Name:
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      value={eventName}
                      type="text"
                      name="eventName"
                      onChange={handleChange}
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </InputGroup>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroup-sizing-default">
                        Event Location:
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
                      value={eventLocation}
                      type="text"
                      name="eventLocation"
                      onChange={handleChange}
                      aria-label="Default"
                      aria-describedby="inputGroup-sizing-default"
                    />
                  </InputGroup>
                </Form.Group>
                <Row>
                  {" "}
                  <Col>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                      <Form.Label>Categories</Form.Label>
                      <Form.Control
                        value={category}
                        name="category"
                        onChange={handleChange}
                        as="select"
                      >
                        <option>Movie</option>
                        <option>Concert</option>
                        <option>Food/Drink</option>
                        <option>Bar/Club</option>
                        <option>Gaming</option>
                        <option>Coding</option>
                        <option>Party</option>
                        <option>Conversation</option>
                        <option>Travel</option>
                        <option>Fitness</option>
                        <option>Other</option>
                      </Form.Control>
                    </Form.Group>
                  </Col>
                  <Col>
                    <Form.Label>Group Size:</Form.Label>
                    {["radio"].map(type => (
                      <div
                        key={`custom-inline-${type}`}
                        style={useStyles.flexBetween}
                        className="mb-3"
                      >
                        <Form.Check
                          custom
                          inline
                          onChange={handleChange}
                          label="1"
                          value="1"
                          name="groupSize"
                          type={type}
                          id={`custom-inline-${type}-1`}
                        />
                        <Form.Check
                          custom
                          inline
                          onChange={handleChange}
                          label="2"
                          value="2"
                          name="groupSize"
                          type={type}
                          id={`custom-inline-${type}-2`}
                        />
                        <Form.Check
                          custom
                          inline
                          onChange={handleChange}
                          label="3"
                          value="3"
                          name="groupSize"
                          type={type}
                          id={`custom-inline-${type}-3`}
                        />
                        <Form.Check
                          custom
                          inline
                          onChange={handleChange}
                          label="4"
                          value="4"
                          name="groupSize"
                          type={type}
                          id={`custom-inline-${type}-4`}
                        />
                        <Form.Check
                          custom
                          inline
                          onChange={handleChange}
                          label="5+"
                          name="groupSize"
                          value="5+"
                          type={type}
                          id={`custom-inline-${type}-5`}
                        />
                      </div>
                    ))}
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Event Details:</Form.Label>
                      <Form.Control
                        value={eventDetails}
                        type="text"
                        name="eventDetails"
                        onChange={handleChange}
                        as="textarea"
                        rows="3"
                      />
                    </Form.Group>
                  </Col>
                  {/* <Col>
                    <div>
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around">
                          <KeyboardDatePicker
                            margin="normal"
                            id="startDate"
                            label="Select event start date"
                            value={startDate}
                            onChange={onChange}
                            KeyboardButtonProps={{
                              "aria-label": "change date"
                            }}
                          />
                          <KeyboardTimePicker
                            margin="normal"
                            id="startTime"
                            label="Select a time to meet"
                            value={startTime}
                            onChange={onChange}
                            KeyboardButtonProps={{
                              "aria-label": "change time"
                            }}
                          />
                        </Grid>

                        <Grid container justify="space-around">
                          <KeyboardDatePicker
                            margin="normal"
                            id="endDate"
                            label="Day event ends"
                            value={endDate}
                            onChange={onchange}
                            KeyboardButtonProps={{
                              "aria-label": "change date"
                            }}
                          />
                          <KeyboardTimePicker
                            margin="normal"
                            id="endTime"
                            label="Time event ends"
                            value={endTime}
                            onChange={onChange}
                            KeyboardButtonProps={{
                              "aria-label": "change time"
                            }}
                          />
                        </Grid>
                      </MuiPickersUtilsProvider>
                    </div>
                  </Col> */}
                </Row>
                <br />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                  <Button variant="danger" href="/user">
                    Cancel
                  </Button>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      {/* <Row>
        <Col>
          <div style={{ margin: "10px" }}>
            <Map />
            </div>
        </Col>
        </Row>
         */}
      <Row>
        <Col>
          <GeocodeForm />
        </Col>
      </Row>
    </Container>
  );
}
