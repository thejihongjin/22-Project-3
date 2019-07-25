const mongoose = require('mongoose');
const Schema= mongoose.Schema;

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
        type: [String],
    },
    description: {
        type:String,
        max: 250
    },
    creatorID: {
        type: Schema.ObjectId,
        ref: "User",
        require: true
    },
    attendeID: [{
        type: Schema.ObjectId,
        ref: "User",
    }],
    pendingID: [{
        type: Schema.ObjectId,
        ref: "User"
    }]
})

module.exports = mongoose.model('Event', EventSchema)