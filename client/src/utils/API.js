import axios from "axios";

export default {
  registerUser: userData => {
    axios.post("/api/user", userData).then(returnAuth => {
      console.log(returnAuth);
      return axios.get("/api/token", {
        headers: { "X-auth-token": returnAuth.token }
      });
    });
  },
  getUser: loginData => {
    return axios.post("/api/auth", loginData);
  },
  createEvent: eventData => {
    axios.post("/api/event", eventData);
  },
  updateEvent: (eventId, eventData) => {
    axios.put(`/api/event/${eventId}`, eventData);
  },
  getAllEventForOne: userId => {
    axios.get(`/api/event/`);
  }
};
