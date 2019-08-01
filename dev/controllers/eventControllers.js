const db = require("../../models");
const Event = db.Event;
const User = db.User;

module.exports = {
  searchAll: (req, res) => {
    Event.find({})
      .populate("users")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  searchOne: (req, res) => {
    Event.findById(req.params.id)
      .populate("users")
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  create: (req, res) => {
    Event.create(req.body)
      .then(dbEvent => {
        //get creator ID and push the
        const user = dbEvent.user;
        console.log(dbEvent._id)
        User.findByIdAndUpdate(user, {
          $push: { attendId: dbEvent._id }
        }).then(res => console.log(res));
        //return the Event data
        res.json(dbEvent);
      })
      .catch(err => res.status(422).json(err));
  },
  update: (req, res) => {
    Event.findByIdAndUpdate(req.params.id, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  delete: (req, res) => {
    Event.findByIdAndDelete(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
