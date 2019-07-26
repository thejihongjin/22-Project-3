
const mongoose = require('mongoose');
const Schema= mongoose.Schema;

const UserSchema = new Schema ({
    username: {
        type: String,
        required:true
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
        type:String,
        require: true,
        min: 6
    },
    avatar: {
        type: String,
    },
    bio: {
        type: String,
        max: 20
    },
    attendId: [{
        type: Schema.ObjectId,
        ref: "Event"
    }],
    petitionId: [{
        type: Schema.ObjectId,
        ref: "Event"
    }]
})

module.exports = mongoose.model('User', UserSchema)

