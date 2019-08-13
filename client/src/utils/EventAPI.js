import axios from "axios";

const config = {
  headers: {
    "Content-Type": "application/json"
  }
};

const API = {
  joinEvent: eventId => {
    return axios.put(`api/events/join/${eventId}`);
  },
  leaveEvent: eventId => {
    return axios.put(`api/events/leave/${eventId}`);
  },
  createEvent: eventObject => {
    return axios.post(`api/events`, eventObject, config);
  },
  updateEvent: (eventObject, eventId) => {
    return axios.put(`api/events/${eventId}`, eventObject, config);
  },
  getEvents: () => {
    return axios.get(`api/events`);
  },
  getEventById: async eventId => {
    console.log(eventId);
    return await axios.get(`api/events/${eventId}`);
  },
  getUserEvents: async userId => {
    console.log(userId);
    return await axios.get(`api/events/user/${userId}`);
  },
  deleteEvent: eventId => {
    return axios.delete(`api/events/${eventId}`);
  }
};

export default API;
