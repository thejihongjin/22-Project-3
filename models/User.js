const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  firstname: {
    type: String
  },
  lastname: {
    type: String
  },
  displayname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    require: true,
    min: 6
  },
  image: {
    type: String
  },
  bio: {
    type: String,
    max: 20
  },
  attendId: [
    {
      type: Schema.ObjectId,
      ref: "event"
    }
  ],
  petitionId: [
    {
      type: Schema.ObjectId,
      ref: "event"
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("user", UserSchema);
