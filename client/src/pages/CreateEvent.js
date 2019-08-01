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

import React, { Component } from "react";
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
  const [startDate, setStartDate] = React.useState(new Date());
  const [startTime, setStartTime] = React.useState(new Date());
  const [endDate, setEndDate] = React.useState(new Date());
  const [endTime, setEndTime] = React.useState(new Date());

  function handleDateStart(date) {
    setStartDate(date);
  }
  function handleTimeStart(date) {
    setStartTime(date);
  }
  function handleEndDate(date) {
    setEndDate(date);
  }
  function handleEndTime(date) {
    setEndTime(date);
  }

  return (
    <Container>
      <Row>
        <Col>
          <Card>
            <Card.Body>
              <Form>
                <Form.Group controlId="exampleForm.ControlInput1">
                  <InputGroup className="mb-3">
                    <InputGroup.Prepend>
                      <InputGroup.Text id="inputGroup-sizing-default">
                        Event Name:
                      </InputGroup.Text>
                    </InputGroup.Prepend>
                    <FormControl
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
                      <Form.Control as="select">
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
                          label="1"
                          name="group"
                          type={type}
                          id={`custom-inline-${type}-1`}
                        />
                        <Form.Check
                          custom
                          inline
                          label="2"
                          name="group"
                          type={type}
                          id={`custom-inline-${type}-2`}
                        />
                        <Form.Check
                          custom
                          inline
                          label="3"
                          name="group"
                          type={type}
                          id={`custom-inline-${type}-3`}
                        />
                        <Form.Check
                          custom
                          inline
                          label="4"
                          name="group"
                          type={type}
                          id={`custom-inline-${type}-4`}
                        />
                        <Form.Check
                          custom
                          inline
                          label="5+"
                          name="group"
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
                      <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                  </Col>
                  <Col>
                    <div>
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around">
                          <KeyboardDatePicker
                            margin="normal"
                            id="startDate"
                            label="Select event start date"
                            value={startDate}
                            onChange={handleDateStart}
                            KeyboardButtonProps={{
                              "aria-label": "change date"
                            }}
                          />
                          <KeyboardTimePicker
                            margin="normal"
                            id="startTime"
                            label="Select a time to meet"
                            value={startTime}
                            onChange={handleTimeStart}
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
                            onChange={handleEndDate}
                            KeyboardButtonProps={{
                              "aria-label": "change date"
                            }}
                          />
                          <KeyboardTimePicker
                            margin="normal"
                            id="endTime"
                            label="Time event ends"
                            value={endTime}
                            onChange={handleEndTime}
                            KeyboardButtonProps={{
                              "aria-label": "change time"
                            }}
                          />
                        </Grid>
                      </MuiPickersUtilsProvider>
                    </div>
                  </Col>
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

      <Row>
        <Col>
          <div style={{ margin: "10px" }}>
            <Map />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
