import React, { useState, useContext, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
// import Toast from "react-bootstrap/Toast";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
import EventContext from "../../context/event/eventContext";
import AuthContext from "../../context/auth/authContext";
import history from "../../utils/history";
// import Map from "../Map";
import EventState from "../../context/event/EventState";

// import JoinButton from "../buttons/JoinButton";
// import LeaveButton from "../buttons/LeaveButton";
// import DeleteButton from "../buttons/DeleteButton";
import Toast from "../Toast";
import EventCardPreview from "./EventCardPreview";

const ViewEvent = props => {
  console.log(props.match.params.id);
  const urlId = props.match.params.id;
  const authContext = useContext(AuthContext);
   const { user } = authContext;
  const eventContext = useContext(EventContext);
  const {
    setCurrent,
    clearEvents,
    current,
    joinEvent,
    events,
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
 
  //console.log(user)
  //const user = '';
  const [showAlert, setShowAlert] = useState(false);

  //   const [event, setEvent] = useState({
  //     _id: "",
  //     user: "",
  //     name: "",
  //     location: "",
  //     addressInfo: "",
  //     category: "Movie",
  //     groupSize: "",
  //     description: "",
  //     attendingId: [],
  //     start: null,
  //     end: null,
  //     mapLat: null,
  //     mapLng: null
  //   });

  useEffect(() => {
    //console.log("run")
    if (!user) {
      //console.log("Why ??")
      authContext.loadUser();
      //console.log(user)
    }
    // eslint-disable-next-line
  });


  useEffect(() => {
    clearEvents();
    // clearUsers();
    setCurrent(urlId);
    // eslint-disable-next-line
  }, []);

  const [didJoin, setDidJoin] = useState([]);
  const [isOwned, setIsOwned] = useState(false);
  const [joined, setJoined] = useState(false);

  //console.log("non-effect",authContext)
  //console.log("non-effect",eventContext)


  //   const {
  //     name,
  //     location,
  //     addressInfo,
  //     category,
  //     groupSize,
  //     description,
  //     attendingId,
  //     start,
  //     end,
  //     mapLat,
  //     mapLng
  //   } = event;

  //   const handleJoin = () => {
  //     if (groupSize !== "Any" && parseInt(groupSize) === attendingId.length) {
  //       alert("Sorry, this event is full. 😟");
  //     } else {
  //       joinEvent(event);
  //       setShowToast(true);
  //       setJoined(true);
  //       setEvent(urlId);
  //       getUsersProfile(urlId);
  //     }
  //   };

  //   const handleUnjoin = () => {
  //     unjoinEvent(event);
  //     setJoined(false);
  //     setEvent(urlId);
  //     getUsersProfile(urlId);
  //   };

  const handleDelete = () => {
    setShowAlert(false);
    deleteEvent(urlId);
    clearEvents();
    clearUsers();
    history.push("/user");
  };
  if (!events) {
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

  // return (
  //     <Fragment>
  //         {/* {event.user ? ( */}
  //         {event && (
  //             <CardGroup>
  //                 {/* <Card style={{ width: "25rem" }}> */}
  //                 <Card>
  //                     <Card.Header style={{ background: "#343a40", color: "white" }}>
  //                         <Card.Title>viewevent {name.toUpperCase()}</Card.Title>
  //                         <Card.Subtitle className="mb-2 text-muted">{category}</Card.Subtitle>
  //                     </Card.Header>
  //                     <Card.Body>
  //                         <Card.Text style={{ textTransform: "capitalize" }}>
  //                             Location: {location}<br />
  //                             Address: {addressInfo}<br />
  //                             Start: {start}<br />
  //                             End: {end}
  //                         </Card.Text>
  //                         <Card.Text>{description}</Card.Text>
  //                         <Card.Subtitle className="mb-2 text-muted">
  //                             {attendingId.length} out of {groupSize} people are going.
  //                         </Card.Subtitle>
  //                         <Card.Subtitle className="mb-2 text-muted">
  //                             People Attending: <br />
  //                             {setUsers
  //                                 ? setUsers.map(userLink => (
  //                                     <Fragment>
  //                                         <Link to="#" key={userLink._id}>{userLink.username}</Link><br />
  //                                     </Fragment>
  //                                 ))
  //                                 : null}
  //                         </Card.Subtitle>
  //                     </Card.Body>
  //                     <Card.Footer>
  //                         { event.user === user._id && <DeleteButton event={event} setCurrent={setCurrent} setShowAlert={setShowAlert} /> }
  //                         { event.user !== user._id && !event.attendingId.includes(user._id) && <JoinButton handleJoin={handleJoin} /> }
  //                         { event.user !== user._id && event.attendingId.includes(user._id) && <LeaveButton handleUnjoin={handleUnjoin} /> }
  //                     </Card.Footer>
  //                 </Card>

  //                 {/* <Card><Map lat={mapLat} lng={mapLng} /></Card> */}
  //             </CardGroup>
  //         )
  //             // : (
  //             //     <div> Sorry, this event is not available.</div>
  //             //   )
  //         }
  //         <Row>
  //             <Col xs={6}>
  //                 {/* <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
  //                     <Toast.Header>
  //                         <strong className="mr-auto">{name.toUpperCase()}</strong>
  //                     </Toast.Header>
  //                     <Toast.Body>Event Joined!</Toast.Body>
  //                 </Toast> */}
  //                 <Toast event={event} showToast={showToast} setShowToast={setShowToast} />
  //             </Col>
  //         </Row>
  //     </Fragment>
  // );

  return (
    <Fragment>
      {events && (
        <CardGroup>
          <EventCardPreview eventId={events._id} event={events} user={user} />
          {/* <Card>
                        <Card.Header style={{ background: "#343a40", color: "white" }}>
                            <Card.Title>viewevent {name.toUpperCase()}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{category}</Card.Subtitle>
                        </Card.Header>
                        <Card.Body>
                            <Card.Text style={{ textTransform: "capitalize" }}>
                                Location: {location}<br />
                                Address: {addressInfo}<br />
                                Start: {start}<br />
                                End: {end}
                            </Card.Text>
                            <Card.Text>{description}</Card.Text>
                            <Card.Subtitle className="mb-2 text-muted">
                                {attendingId.length} out of {groupSize} people are going.
                            </Card.Subtitle>
                            <Card.Subtitle className="mb-2 text-muted">
                                People Attending: <br />
                                {setUsers
                                    ? setUsers.map(userLink => (
                                        <Fragment>
                                            <Link to="#" key={userLink._id}>{userLink.username}</Link><br />
                                        </Fragment>
                                    ))
                                    : null}
                            </Card.Subtitle>
                        </Card.Body>
                        <Card.Footer>
                            { event.user === user._id && <DeleteButton event={event} setCurrent={setCurrent} setShowAlert={setShowAlert} /> }
                            { event.user !== user._id && !event.attendingId.includes(user._id) && <JoinButton handleJoin={handleJoin} /> }
                            { event.user !== user._id && event.attendingId.includes(user._id) && <LeaveButton handleUnjoin={handleUnjoin} /> }
                        </Card.Footer>
                    </Card> */}

          {/* <Card><Map lat={mapLat} lng={mapLng} /></Card> */}
        </CardGroup>
      )
      // )
      // : (
      //     <div> Sorry, this event is not available.</div>
      //   )
      }

      {/* <Toast event={events} showToast={showToast} setShowToast={setShowToast} /> */}
    </Fragment>
  );
};

export default ViewEvent;
