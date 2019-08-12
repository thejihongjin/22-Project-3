// @import react
import React, { useState, useContext, useEffect } from "react";

// @import font-end components 
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
// import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

//import Geocode from "react-geocode";
// @import context
import AuthContext from "../context/auth/authContext";
// import { BrowserRouter as Router, Route } from 'react-router-dom';
//import MapCont from "../components/Map";
import EventContext from "../context/event/eventContext";

// @import API
import API from "../"


//Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY);

// page style
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

export default function CreateEvent(props) {

  //const eventContext = useContext(EventContext);
  
  //const { addEvent, updateEvent, clearCurrent, current } = eventContext;
  

  //@ getting user data
  const authContext = useContext(AuthContext);
  const { user } = authContext;

  //@ initial state for components
  const [startTime, setStartTime] = useState(new Date()); // can change
  const [endTime, setEndTime] = useState(new Date()); // can change
  const [timeMessage,setTimeMessage] = useState("");
  const [event, setEvent] = useState({
    name: "",
    location: "",
    category: "Movie",
    groupSize: "",
    description: "",
    attendId: "",
    addressInfo: "",
    start: null,
    end: null,
    mapLat: null,
    mapLng: null
  });

  /// @useEffect area

  //useEffect for when page first loaded
  useEffect(() => {
    // check if user is null if is load user info
    if (!user) {
        authContext.loadUser();
    }
    
    //check if event id is present, if is load event info from database
    const id = props.params.match.id;
    if(id) {
      API.getEvent(id)
         .then((dbEvent) => {
          setEvent(dbEvent)
          setStartTime(event.start)
          setEndTime(event.end)
         })
         .catch(err => {
           console.log(err)
         })
    }
  },[]);

  //useEffect to check for startTime and endTime whether they are acceptable or not
  useEffect(()=>{
    setTimeMessage(null)
    if(endTime <= startTime) {
      setTimeMessage("The end time should be later than the start time")
    } 
  },[startTime,endTime])
  

  // @handle functions
  const handleStartTime = time => {

    setStartTime(time);

    const saveState = event;
    saveState.start = time;
    setEvent(saveState);
  };

  const handleEndTime = time => {
    setEndTime(time);
    const saveState = event;
    saveState.end = time;
    setEvent(saveState);
  };

  /*useEffect(() => {
    if (current) {
      setEvent(current);
      setStartTime(current.start);
      setEndTime(current.end);
    }
  }, [eventContext, current]);*/

        setStartTime(time);

  const goBack = () => {
    //clearCurrent();
    history.push("/user");
  };

  //const handleEndTime = time => {

  /*const handleSubmit = e => {
    e.preventDefault();
    let userInput = event.location;
    let address;
    let placeId;
    let mapLatData;
    let mapLngData;
    console.log(userInput);

        const saveState = event;
        saveState.end = time;
        setEvent(saveState);
        //setEvent({...event, [start]: date})
    };
    useEffect(() => {
        if (current) {
            setEvent(current);
            setStartTime(current.start);
            setEndTime(current.end);
        } else {
            // setEvent({
            //   category: "Movie",
            //   groupSize: "",
            //   addressInfo: ""
            // });
            console.log("No event yet");
        }
    }, [eventContext, current]);

    const {
        name,
        location,
        category,
        groupSize,
        description
        //addressInfo
    } = event;

    const goBack = () => {
        clearCurrent();
        history.push("/user");
        //console.log(e)
      });
  };*/

    /*const handleSubmit = e => {
        e.preventDefault();
        let userInput = event.location;
        let address;
        let placeId;
        let mapLatData;
        let mapLngData;
        console.log(userInput);

        Geocode.fromAddress(userInput)
            .then(
                response => {
                    const { lat, lng } = response.results[0].geometry.location;
                    console.log(lat, lng);
                    // setLocation({...locationInput, mapLat: lat})
                    // setLocation({...locationInput, mapLng: lng})
                    address = response.results[0].formatted_address;
                    mapLatData = lat;
                    mapLngData = lng;
                    console.log(response.results[0]);
                    placeId = response.results[0].place_id;
                },
                error => {
                    console.error(error);
                }
            )
            .finally(() => {
                const postEvent = { ...event };
                postEvent.addressInfo = address;
                postEvent.mapLat = mapLatData;
                postEvent.mapLng = mapLngData;
                setEvent(postEvent);
                if (current) {
                    updateEvent(event);
                } else {
                    addEvent(postEvent);
                }
                clearCurrent();
                history.push("/user");
                //console.log(e)
            });
    };

  /*const [locationInput, setLocation] = useState({
    mapLat: 32.712043,
    mapLng: -117.142254
  });*/

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

    const [locationInput, setLocation] = useState({
        mapLat: 32.712043,
        mapLng: -117.142254
    });

    return (
        // <Container>
        //   {/* <Navigation /> */}
        //   <br />
        //   <Row>
        //     <Col>
        <Card>
            <Card.Body>
                {/* <Card.Title style={{ textAlign: "center" }}> */}
                <Card.Title>
                    {current ? "Edit Event" : "Create Event"}
                </Card.Title>
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
                        <Col>
                            <Form.Group controlId="exampleForm.ControlSelect1">
                                <Form.Label>Categories</Form.Label>
                                <Form.Control
                                    value={category}
                                    name="category"
                                    onChange={handleChange}
                                    as="select"
                                >
                                    {eventCategories.map((category, i) => (
                                        <option key={i}>{category}</option>
                                    ))}
                                </Form.Control>
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Label>How many would you like to join you:</Form.Label>

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
                                    checked={groupSize === "5"}
                                    onChange={handleChange}
                                    label="5"
                                    name="groupSize"
                                    value="5"
                                    type="radio"
                                    id={`custom-inline-radio-5`}
                                />
                                <Form.Check
                                    custom
                                    inline
                                    checked={groupSize === "Any"}
                                    onChange={handleChange}
                                    label="Any"
                                    name="groupSize"
                                    value="Any"
                                    type="radio"
                                    id={`custom-inline-radio-6`}
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
                                <div className="text-danger">{timeMessage ? timeMessage : ""}</div>
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <Grid container justify="space-around">
                                        <KeyboardDatePicker
                                            minDate="0"
                                            margin="normal"
                                            id="startDate"
                                            name="date"
                                            label="Select event start date"
                                            value={startTime}
                                            onChange={handleStartTime}
                                            KeyboardButtonProps={{
                                                "aria-label": "change date"
                                            }}
                                            disablePast
                                        />
                                        <KeyboardTimePicker
                                            minDate="0"
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

                                    {
                                        <Grid container justify="space-around">
                                            <KeyboardDatePicker
                                                minDate="0"
                                                margin="normal"
                                                id="endDate"
                                                label="Day event ends"
                                                value={endTime}
                                                onChange={handleEndTime}
                                                KeyboardButtonProps={{
                                                    "aria-label": "change date"
                                                }}
                                                disablePast
                                            />
                                            <KeyboardTimePicker
                                                minDate="0"
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
                                    }
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
                            <Button onClick={goBack} variant="outline-info">
                                Back To Profile
                    </Button>
                        </Link>
                    </div>
                </Form>
            </Card.Body>
        </Card>
        //     {/* </Col>
        //   </Row> */}
        //   {/* 
        //   <Row>
        //     <Col>
        //       <div style={{ margin: "10px" }}>
        //         <Map />
        //         </div>
        //     </Col>
        //     </Row> */}
        // {/* </Container> */}
    );
}
