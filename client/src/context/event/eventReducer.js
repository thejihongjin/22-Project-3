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

export default (state, action) => {
  switch (action.type) {
    case GET_EVENTS:
    case GET_USER_EVENTS:
    case SET_CURRENT:
      return {
        ...state,
        events: [action.payload, ...state.events],
        loading: false
      };
    case GET_USERS:
      return {
        ...state,
        setUsers: action.payload,
        loading: false
      };
    case CLEAR_USERS:
      return {
        ...state,
        setUsers: null
      };
    case ADD_EVENT:
      return {
        ...state,
        events: [action.payload, ...state.events],
        loading: false
      };
    case UNJOIN_EVENT:
    case JOIN_EVENT:
    case UPDATE_EVENT:
      return {
        ...state,
        events: state.events.map(event =>
          event._id === action.payload._id ? action.payload : event
        ),
        loading: false
      };
    case DELETE_EVENT:
      return {
        ...state,
        events: state.events.filter(event => event._id !== action.payload),
        loading: false
      };
    case CLEAR_EVENTS:
      return {
        ...state,
        events: null,
        filtered: null,
        error: null,
        current: null
      };

    case CLEAR_CURRENT:
      return {
        ...state,
        event: null
      };
    case FILTER_EVENTS:
      return {
        ...state,
        filtered: state.events.filter(event => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return event.name.match(regex);
        })
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null
      };
    case EVENT_ERROR:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
