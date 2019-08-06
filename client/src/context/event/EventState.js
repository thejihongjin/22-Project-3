import React, { useReducer } from "react";
import axios from "axios";
import EventContext from "./eventContext";
import eventReducer from "./eventReducer";
import {
  GET_USER_EVENTS,
  GET_EVENTS,
  ADD_EVENT,
  JOIN_EVENT,
  GET_USERS,
  CLEAR_USERS,
  UNJOIN_EVENT,
  DELETE_EVENT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_EVENT,
  FILTER_EVENTS,
  CLEAR_EVENTS,
  CLEAR_FILTER,
  EVENT_ERROR
} from "../types";

const EventState = props => {
  const initialState = {
    events: null,
    current: null,
    filtered: null,
    setUsers: null,
    error: null
  };

  const [state, dispatch] = useReducer(eventReducer, initialState);

  //Get Events
  const getEvents = async () => {
    try {
      const res = await axios.get("/api/events");

      dispatch({
        type: GET_EVENTS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: EVENT_ERROR,
        payload: err.response.msg
      });
    }
  };

  //Get User Events
  const getUserEvents = async () => {
    try {
      const res = await axios.get("/api/events/user");

      dispatch({
        type: GET_USER_EVENTS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: EVENT_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Clear Profiles
  const clearUsers = () => {
    dispatch({ type: CLEAR_USERS });
  };

  // Add Event
  const addEvent = async event => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      console.log(event);
      const res = await axios.post("/api/events", event, config);

      dispatch({
        type: ADD_EVENT,
        payload: res.data
      });
    } catch (err) {
      console.log(err);
      dispatch({
        type: EVENT_ERROR,
        payload: err
      });
    }
  };

  //Join Event
  const joinEvent = async event => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.put(
        `/api/events/join/${event._id}`,
        event,
        config
      );

      dispatch({
        type: JOIN_EVENT,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: EVENT_ERROR,
        payload: err.response.msg
      });
    }
  };

  //Leave Event
  const unjoinEvent = async event => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.put(
        `/api/events/leave/${event._id}`,
        event,
        config
      );

      dispatch({
        type: UNJOIN_EVENT,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: EVENT_ERROR,
        payload: err.response.msg
      });
    }
  };

  //Delete Event
  const deleteEvent = async id => {
    try {
      await axios.delete(`/api/events/${id}`);

      dispatch({
        type: DELETE_EVENT,
        payload: id
      });
    } catch (err) {
      dispatch({
        type: EVENT_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Update Event
  const updateEvent = async event => {
    const config = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const res = await axios.put(`/api/events/${event._id}`, event, config);

      dispatch({
        type: UPDATE_EVENT,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: EVENT_ERROR,
        payload: err.response.msg
      });
    }
  };
  //View User Profile
  const getUsersProfile = async event => {
    try {
      const res = await axios.get(`/api/events/profiles/${event._id}`, event);

      dispatch({
        type: GET_USERS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: EVENT_ERROR,
        payload: err.response.msg
      });
    }
  };

  // Clear Events
  const clearEvents = () => {
    dispatch({ type: CLEAR_EVENTS });
  };

  // Filter Events
  const filterEvents = text => {
    dispatch({ type: FILTER_EVENTS, payload: text });
  };

  // Clear Filter
  const clearFilter = () => {
    dispatch({ type: CLEAR_FILTER });
  };

  // Set Current Event
  const setCurrent = event => {
    dispatch({ type: SET_CURRENT, payload: event });
  };

  // Clear Current Event
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT });
  };

  return (
    <EventContext.Provider
      value={{
        events: state.events,
        setUsers: state.setUsers,
        current: state.current,
        filtered: state.filtered,
        error: state.error,
        getUserEvents,
        getUsersProfile,
        addEvent,
        joinEvent,
        unjoinEvent,
        deleteEvent,
        setCurrent,
        clearCurrent,
        clearUsers,
        updateEvent,
        filterEvents,
        clearFilter,
        getEvents,
        clearEvents
      }}
    >
      {props.children}
    </EventContext.Provider>
  );
};

export default EventState;
