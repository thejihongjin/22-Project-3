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
    }
})

module.exports = mongoose.model('User', UserSchema)