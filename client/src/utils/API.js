import axios from "axios";

export default {
  registerUser: (userData, cb) => {
    /*axios.post("/api/users", userData).then(returnAuth => {
      console.log(returnAuth);
      axios
        .get("/api/auth", {
          headers: { "x-auth-token": returnAuth.data.token }
        })
        .then(response => cb(response));
    });*/
    return axios.post("/api/user", userData);
  },
  getUser: loginData => {
    return axios.post("/api/user/signin", loginData);
  },
  createEvent: eventData => {
    return axios.post("/api/event", eventData);
  },
  updateEvent: (eventId, eventData) => {
    axios.put(`/api/event/${eventId}`, eventData);
  },
  getAllEventForOne: userId => {
    axios.get(`/api/event/`);
  }
};
