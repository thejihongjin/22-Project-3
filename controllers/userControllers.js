const db = require("../models")
const User = db.User

module.exports = {
    findAll:(req,res)=>{
        User.find( req.querry)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    searchOne:(req,res)=>{
        User.findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    create:(req,res)=>{
        User.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    update:(req,res)=>{
        User.findByIdAndUpdate(req.params.id,req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
    delete:(req,res)=>{
        User.findByIdAndDelete(res.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err))
    },
}