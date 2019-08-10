import axios from "axios";

const config = {
    headers: {
        "Content-Type": "application/json"
    }
}

const API = {
    joinEvent: (eventId) => {
        return axios.put(`api/events/join/${eventId}`)
    },
    leaveEvent: (eventId) => {
        return axios.put(`api/events/leave/${eventId}`)
    },
    createEvent: (eventObject) => {
        return axios.post(`api/events`,eventObject,config)
    },
    updateEvent: (eventObject) => {
        return axios.put(`api/events/`,eventObject,config)
    },
    getEvents: () => {
        return axios.get(`api/events`)
    },
    getEventById: (eventId) => {
        return axios.get(`api/events/view`)
    }
}

export default API;