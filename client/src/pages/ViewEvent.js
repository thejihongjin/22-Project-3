// React import 
import React, { useState, useContext} from "react";

//bootstrap import
import Card from "react-bootstrap/Card";
import { Container, Row, Col} from "react-bootstrap";
import { Link} from "react-router-dom";

//components import
import Navigation from "../components/Navigation";

//context import
import AuthContext from "../context/auth/authContext";
import EventContext from "../context/event/eventContext";

const ViewEvent = (props)=>{
    //get current event and user object from eventContext and authContext
    const authContext = useContext(authContext);
    const eventContext = useContext(eventContext);

    const { current} = eventContext;
    const { user} = authContext;

    //display the current
    //test if the current event is created by user than change display components
    //update current should updating the current object and the database
    //link to edit 

};

export default ViewEvent

