import React, { useState, useContext, useEffect, Fragment } from "react";
// import { Link } from "react-router-dom";
import Loading from "../components/Loading";
// import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
// import Button from "react-bootstrap/Button";
// import Alert from "react-bootstrap/Alert";
// import Toast from "react-bootstrap/Toast";
import EventContext from "../context/event/eventContext";
import AuthContext from "../context/auth/authContext";
// import history from "../../utils/history";
// import Map from "../Map";
// import EventState from "../../context/event/EventState";

import EventCard from "../components/events/EventCard";
import Toast from "../components/Toast";

const ViewEvent = props => {
    useEffect(() => {
        if (!user) {
            authContext.loadUser();
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
        // current,
        // joinEvent,
        events,
        // unjoinEvent,
        // deleteEvent,
        // getUsersProfile,
        // setUsers,
        // clearUsers
    } = eventContext;
    /*if (current === null) {
          history.push("/user");
        }*/
    // let currentEvent = localStorage.getItem("cacheEvent")
    // console.log(JSON.stringify(currentEvent))
    // const [showToast, setShowToast] = useState(false);

    //console.log(user)
    //const user = '';
    // const [showAlert, setShowAlert] = useState(false);
    const [showAddress] = useState("show");
    const [showViewLink] = useState("hide");

    const [showToast, setShowToast] = useState(true);

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

    // const handleDelete = () => {
    //     setShowAlert(false);
    //     deleteEvent(urlId);
    //     clearEvents();
    //     clearUsers();
    //     history.push("/user");
    // };

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
                    <Fragment>
                        <CardGroup>
                            <EventCard key={events._id} event={events} user={user} setCurrent={setCurrent} showAddress={showAddress} showViewLink={showViewLink} />
                            {/* <Card><Map lat={mapLat} lng={mapLng} /></Card> */}
                        </CardGroup>
                        <Toast showToast={showToast} setShowToast={setShowToast} />
                    </Fragment>

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
