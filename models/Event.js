const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const EventSchema = new Schema({
  name: {
    type: String,
    require: true
  },
  location: {
    type: String
  },
  groupSize: {
    type: String
    // require: true
  },
  start: {
    type: Date
    //require: true
  },
  end: {
    type: Date
    //require: true
  },
  category: {
    type: String
  },
  description: {
    type: String,
    max: 250
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
    require: true
  },
  attendId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users"
    }
  ],
  pendingId: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users"
    }
  ],
  date: {
    type: Date,
    default: Date.now
  },
  addressInfo: {
    type: String
  }
});

module.exports = mongoose.model("event", EventSchema);
