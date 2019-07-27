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
    type: Number,
    require: true
  },
  start: {
    type: Date,
    require: true
  },
  end: {
    type: Date,
    require: true
  },
  category: {
    type: [String]
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
  attendID: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users"
    }
  ],
  pendingID: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users"
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("event", EventSchema);
