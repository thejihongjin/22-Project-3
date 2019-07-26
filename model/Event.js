const mongoose = require("mongoose");

const EventSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users"
  },
  name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  group: {
    type: Number,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  start: {
    type: Date
  },
  end: {
    type: Date
  }
});
