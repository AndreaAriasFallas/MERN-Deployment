const Pirate = require("../models/pirate.model.js");


const mostrarPirates = (req, res) =>{
    Pirate.find().sort({name: 1})
        .then(pirate => res.json(pirate))
        .catch(err => {
            res.status(400).json(err);
        })
}



const borrarPirate = (req, res) =>{
    Pirate.deleteOne({_id: req.params.id})
        .then(pirate => res.json(pirate))
        .catch(err => {
            res.status(400).json(err);
        })
}

const crearPirate = (req, res) => {
    Pirate.create(req.body)
        .then(pirate => res.json(pirate))
        .catch(err => {
            res.status(400).json(err);
        })
}

const buscarPirate = (req, res) => {
    Pirate.findOne({_id: req.params.id})
        .then(pirate => res.json(pirate))
        .catch(err => {
            res.status(400).json(err);
        })
}


module.exports = {
    mostrarPirates,
    borrarPirate,
    crearPirate,
    buscarPirate
    }
