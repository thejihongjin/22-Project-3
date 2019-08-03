import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Card from "react-bootstrap/Card";
import Grid from "@material-ui/core/Grid";
import history from "../utils/history";
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
import AuthContext from "../context/auth/authContext";
// import { BrowserRouter as Router, Route } from 'react-router-dom';
import MapCont from "../components/Map"
import Navigation from "../components/Navigation"
import EventContext from "../context/event/eventContext";
import Geocode from "react-geocode";

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY)

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
  const eventContext = useContext(EventContext);
  const authContext = useContext(AuthContext);
  const { addEvent, updateEvent, clearCurrent, current } = eventContext;
  const { user } = authContext;
  //const [date, setDate] = useState(new Date());
  const [startTime, setStartTime] = useState(new Date());
  const [endTime, setEndTime] = useState(new Date());
  const [event, setEvent] = useState({
    name: "",
    location: "",
    category: "Movie",
    groupSize: "",
    description: "",
    addressInfo: "",
    start: null,
    end: null
  });

  const handleStartTime = (time)=>{
    setStartTime(time);
    console.log(time)

    const saveState = event;
    saveState.start = time
    setEvent(saveState)
    //setEvent({...event, [start]: date})
  }

  const handleEndTime = (time)=>{
    setEndTime(time);
    console.log(time)

    const saveState = event;
    saveState.end = time
    setEvent(saveState)
    //setEvent({...event, [start]: date})
  }

  useEffect(() => {
    if (current) {
      setEvent(current);
      setStartTime(current.start)
      setEndTime(current.end)
    } else {
      setEvent({
        eventName: "",
        eventLocation: "",
        category: "Movie",
        groupSize: "",
        eventDetails: ""
      });
    }
    
  }, [eventContext, current]);

  const { name, location, category, groupSize, description, addressInfo } = event;

  const handleChange = e => {
    setEvent({ ...event, [e.target.name]: e.target.value });
    // let address = event.location
    // console.log(address)

    // Geocode.fromAddress(address).then(
    // response => {
    //     const { lat, lng } = response.results[0].geometry.location;
    //     console.log(lat, lng);
    //     setLocation({...locationInput, mapLat: lat})
    //     setLocation({...locationInput, mapLng: lng})
    //     setEvent({...event, location: response.results[0].formatted_address})
    //     console.log(response.results[0])
    //     console.log(response.results[0].formatted_address)
    //     },
    //     error => {
    //     console.error(error);
    //     }
    // );
  };

  const handleSubmit = e => {
    e.preventDefault();
    // setEvent({ ...event, [e.target.name]: e.target.value });
    let address = event.location
    console.log(address)

    Geocode.fromAddress(address).then(
    response => {
        const { lat, lng } = response.results[0].geometry.location;
        console.log(lat, lng);
        setLocation({...locationInput, mapLat: lat})
        setLocation({...locationInput, mapLng: lng})
        let googleAdd = response.results[0].formatted_address
        // setEvent({...event, addressInfo: response.results[0].formatted_address})
        console.log(response.results[0])
        console.log(response.results[0].formatted_address)
        console.log("an address", googleAdd)
        },
        error => {
        console.error(error);
        }
    );
    setEvent({...event, [e.target.addressInfo]: "test"})

    if (current) {
      updateEvent(event);
    } else {
      addEvent(event);
    }
    clearCurrent();
    history.push("/user");
    //console.log(e)
  };

  // const clearAll = () => {
  //   clearCurrent();
  // };
  

  const [locationInput, setLocation] = useState({
    mapLat: 32.712043,
    mapLng: -117.142254
} )

//   const handleFormSubmit = (event) => {
//     event.preventDefault();
//     let address = locationInput.addressRes
//     console.log(address)

//     Geocode.fromAddress(address).then(
//     response => {
//         const { lat, lng } = response.results[0].geometry.location;
//         console.log(lat, lng);
//         setLocation({...locationInput, mapLat: lat})
//         setLocation({...locationInput, mapLng: lng})
//         setEvent({...event, [location]: response.results[0].formatted_address})
//         console.log(response.results[0])
//         console.log(response.results[0].formatted_address)
//         },
//         error => {
//         console.error(error);
//         }
//     );
// }


  return (
    <Container>
      <Navigation />
      <br />
      <Row>
        <Col>
          <Card>
            <Card.Title style={{ textAlign: "center" }}>
              {current ? "Edit Event" : "Create Event"}
            </Card.Title>
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
                      value={name}
                      type="text"
                      name="name"
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
                      value={location}
                      type="text"
                      name="location"
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

                    <div
                      key={`custom-inline-radio`}
                      style={useStyles.flexBetween}
                      className="mb-3"
                    >
                      <Form.Check
                        custom
                        inline
                        checked={groupSize === "1"}
                        onChange={handleChange}
                        label="1"
                        value="1"
                        name="groupSize"
                        type="radio"
                        id={`custom-inline-radio-1`}
                      />
                      <Form.Check
                        custom
                        inline
                        checked={groupSize === "2"}
                        onChange={handleChange}
                        label="2"
                        value="2"
                        name="groupSize"
                        type="radio"
                        id={`custom-inline-radio-2`}
                      />
                      <Form.Check
                        custom
                        inline
                        checked={groupSize === "3"}
                        onChange={handleChange}
                        label="3"
                        value="3"
                        name="groupSize"
                        type="radio"
                        id={`custom-inline-radio-3`}
                      />
                      <Form.Check
                        custom
                        inline
                        onChange={handleChange}
                        label="4"
                        value="4"
                        checked={groupSize === "4"}
                        name="groupSize"
                        type="radio"
                        id={`custom-inline-radio-4`}
                      />
                      <Form.Check
                        custom
                        inline
                        checked={groupSize === "5+"}
                        onChange={handleChange}
                        label="5+"
                        name="groupSize"
                        value="5+"
                        type="radio"
                        id={`custom-inline-radio-5`}
                      />
                    </div>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                      <Form.Label>Event Details:</Form.Label>
                      <Form.Control
                        value={description}
                        type="text"
                        name="description"
                        onChange={handleChange}
                        as="textarea"
                        rows="3"
                      />
                    </Form.Group>
                  </Col>
                  <Col>
                    <div>
                      <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <Grid container justify="space-around">
                          <KeyboardDatePicker
                            margin="normal"
                            id="startDate"
                            name="date"
                            label="Select event start date"
                            value={startTime}
                            onChange={handleStartTime}
                            KeyboardButtonProps={{
                              "aria-label": "change date"
                            }}
                          />
                          <KeyboardTimePicker
                            margin="normal"
                            id="startTime"
                            name="time"
                            label="Select a time to meet"
                            value={startTime} 
                            onChange={handleStartTime}
                            KeyboardButtonProps={{
                              "aria-label": "change time"
                            }}
                          />
                        </Grid>

                        {<Grid container justify="space-around">
                          <KeyboardDatePicker
                            margin="normal"
                            id="endDate"
                            label="Day event ends"
                            value={endTime}
                            onChange={handleEndTime}
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
                        </Grid>}
                      </MuiPickersUtilsProvider>
                    </div>
                  </Col>
                </Row>
                <br />
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <Button variant="outline-primary" type="submit">
                    {current ? "Update Event" : "Submit"}
                  </Button>
                  <Link to="/user">
                    <Button variant="outline-info">Back To Profile</Button>
                  </Link>
                </div>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
{/* 
      <Row>
        <Col>
          <div style={{ margin: "10px" }}>
            <Map />
            </div>
        </Col>
        </Row> */}
        
    </Container>
  );
}
