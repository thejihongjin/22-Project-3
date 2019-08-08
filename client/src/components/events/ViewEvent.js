import React, { useState, useContext, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import Toast from "react-bootstrap/Toast";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import EventContext from "../../context/event/eventContext";
import AuthContext from "../../context/auth/authContext";
import history from "../../utils/history";
import Map from "../Map";
import EventState from "../../context/event/EventState";

const ViewEvent = () => {
  const authContext = useContext(AuthContext);
  const eventContext = useContext(EventContext);
  const {
    setCurrent,
    clearCurrent,
    current,
    joinEvent,
    unjoinEvent,
    deleteEvent,
    getUsersProfile,
    setUsers,
    clearUsers
  } = eventContext;
  /*if (current === null) {
    history.push("/user");
  }*/
  // let currentEvent = localStorage.getItem("cacheEvent")
  // console.log(JSON.stringify(currentEvent))
  const [showToast, setShowToast] = useState(false);
  const { user } = authContext;
  //console.log(user)
  //const user = '';
  const [showAlert, setShowAlert] = useState(false);

  const [event, setEvent] = useState({
    _id: "",
    name: "",
    location: "",
    addressInfo: "",
    category: "Movie",
    groupSize: "",
    description: "",
    attendingId: [],
    start: null,
    end: null,
    mapLat: null,
    mapLng: null
  });
  useEffect(() => {
    if (current) {
      setEvent(current);
    } else {
      console.log("No event yet");
    }
  }, [eventContext, current, setCurrent]);

  const [didJoin, setDidJoin] = useState([]);
  const [isOwned, setIsOwned] = useState(false);
  const [joined, setJoined] = useState(false);

  //console.log("non-effect",authContext)
  //console.log("non-effect",eventContext)

  useEffect(() => {
    //console.log("run")
    if (!user) {
      //console.log("Why ??")
      authContext.loadUser();
      //console.log(user)
    }
    //console.log("currentEvent", current)
    //console.log("Cache", CacheEvent)
    // if (current === null) {
    //   //console.log("Cache", JSON.parse(CacheEvent));
    //   current = localStorage.getItem("cacheEvent")
    //   setCurrent(current);
    //   console.log(current);
    // }

    //setEvent(current)

    //  if(current && CacheEvent === "null") {
    //    localStorage.setItem("currentEvent",JSON.stringify(current))
    //  }
    //console.log(current.attendingId);
    //getUsersProfile(current);

    // console.log("Effect", authContext);
    // console.log("Effect", eventContext)

    // eslint-disable-next-line
  });

  // useEffect(()=> {
  //   setEvent(current)
  // },[current,eventContext])

  // useEffect(()=> {
  //   setDidJoin(event.attendingId.filter(attendId => attendId === user._id))
  //   setIsOwned(current.user === user._id ? true : false);
  //   setJoined(didJoin[0] === user._id ? true : false)
  // },[event])

  /*useEffect(()=> {
    setDidJoin(event.attendingId.filter(attendId => attendId === user._id))
    setIsOwned(current.user === user._id ? true : false);
    setJoined(didJoin[0] === user._id ? true : false)
  },[current,user,event])*/

  /*const [didJoin] = useState(
    event.attendingId.filter(attendId => attendId === user._id)
  );
  const [isOwned] = useState(current.user === user._id ? true : false);
  const [joined, setJoined] = useState(didJoin[0] === user._id ? true : false);*/

  const {
    name,
    location,
    addressInfo,
    category,
    groupSize,
    description,
    attendingId,
    start,
    end,
    mapLat,
    mapLng
  } = event;

  const handleJoin = () => {
    if (groupSize !== "Any" && parseInt(groupSize) === attendingId.length) {
      alert("Sorry, this event is full. 😟");
    } else {
      joinEvent(event);
      setShowToast(true);
      setJoined(true);
      setEvent(current);
      getUsersProfile(current);
    }
  };

  const handleUnjoin = () => {
    unjoinEvent(event);
    setJoined(false);
    setEvent(current);
    getUsersProfile(current);
  };

  const goBackUser = () => {
    clearCurrent();
    clearUsers();
    history.push("/user");
  };

  const goBackSearch = () => {
    clearCurrent();
    clearUsers();
    history.push("/search");
  };

  const handleDelete = () => {
    setShowAlert(false);
    deleteEvent(current._id);
    clearCurrent();
    clearUsers();
    history.push("/user");
  };
  if (!current) {
    return <Loading />;
  }

  if (showAlert) {
    return (
      <Card style={{ width: "25rem" }}>
        <Alert variant="danger" onClose={() => setShowAlert(false)} dismissible>
          <Alert.Heading>
            Are you sure you want to delete this event?
          </Alert.Heading>
          <Button className="btn-danger" onClick={handleDelete}>
            Yes
          </Button>
        </Alert>
      </Card>
    );
  }

  return (
    <Fragment>
      {event.user ? (
        <CardGroup>
          <Card style={{ width: "25rem" }}>
            {" "}
            <Card.Body>
              <Card.Title>{name.toUpperCase()}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {category}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                Date: {start}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                Date: {end}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                {location}
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                {addressInfo}
              </Card.Subtitle>
              <Card.Text>{description}</Card.Text>
              <Card.Subtitle className="mb-2 text-muted">
                {attendingId.length} out of {groupSize} people are going.
              </Card.Subtitle>
              <Card.Subtitle className="mb-2 text-muted">
                People Attending:
                <br />
                {setUsers
                  ? setUsers.map(userLink => (
                      <Fragment>
                        <Link to="#" key={userLink._id}>
                          {userLink.username}
                        </Link>
                        <br />
                      </Fragment>
                    ))
                  : null}
              </Card.Subtitle>
              {event.user === user._id && (
                <Button
                  style={{ float: "right" }}
                  className="btn-danger"
                  size="sm"
                  onClick={() => setShowAlert(true)}
                >
                  Delete
                </Button>
              )}{" "}
              {joined && event.user !== user._id && (
                <Fragment>
                  <p>You have already joined this event!</p>

                  <Button
                    type="submit"
                    style={{ float: "right" }}
                    className="btn-warning"
                    size="sm"
                    onClick={() => handleUnjoin()}
                  >
                    - Leave Event
                  </Button>
                </Fragment>
              )}{" "}
              {event.user !== user._id && !joined && (
                <Button
                  type="submit"
                  style={{ float: "right" }}
                  className="btn-success"
                  size="sm"
                  onClick={() => handleJoin()}
                >
                  + Join
                </Button>
              )}
              <Button size="sm" onClick={goBackSearch}>
                Search More Events
              </Button>
              <Button size="sm" onClick={goBackUser}>
                Back To Profile
              </Button>
            </Card.Body>
          </Card>

          <Card>
            <Map lat={mapLat} lng={mapLng} />
          </Card>
        </CardGroup>
      ) : (
        <div> Sorry, this event is not available.</div>
      )}
      <Row>
        <Col xs={6}>
          <Toast
            onClose={() => setShowToast(false)}
            show={showToast}
            delay={3000}
            autohide
          >
            <Toast.Header>
              <strong className="mr-auto">{name.toUpperCase()}</strong>
            </Toast.Header>
            <Toast.Body>Event Joined!</Toast.Body>
          </Toast>
        </Col>
      </Row>
    </Fragment>
  );

  /*return (
    <h1>Debug in process </h1>
  )*/
};

export default ViewEvent;
