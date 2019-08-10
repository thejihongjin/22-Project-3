import React, { useState, useContext, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import Loading from "../Loading";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
// import Toast from "react-bootstrap/Toast";
import EventContext from "../../context/event/eventContext";
import AuthContext from "../../context/auth/authContext";
import history from "../../utils/history";
// import Map from "../Map";
import EventState from "../../context/event/EventState";

import Toast from "../Toast";
import EventCardPreview from "./EventCardPreview";

const ViewEvent = props => {
    useEffect(() => {
        //console.log("run")
        if (!user) {
            //console.log("Why ??")
            authContext.loadUser();
            //console.log(user)
        }
        // eslint-disable-next-line
    });
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
    const [showAddress, setShowAddress] = useState("show"); // 
    const [showViewLink, setShowViewLink] = useState("hide");

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
    if (!user) {
        return <Loading />;
    }


    return (
        <Fragment>
            {events === null ? (
                <h1>
                    Sorry an error occurred. This event is unavailable at this time.
        </h1>
            ) : (
                    <CardGroup>
                        <EventCardPreview key={events._id} event={events} user={user} setCurrent={setCurrent} showAddress={showAddress} showViewLink={showViewLink} />
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
