/** On importe les librairies */
const bcrypt = require('bcrypt-nodejs');

/** On importe les modèles */
const tarif = require('../models/tarif');

/** On déclare les fonctions liées aux tarifs */
const getTarifs = (req, res) => {
    tarif.getTarifsByEvent(req.params.idEvent, function (err, rows) {
        if(err)
        {
            res.status(400).json(err);
        }
        else
        {
            res.status(200).json(rows);
        }
    });
};

const postTarif = (req, res) => {
    tarif.addTarifByEvent(req.params.idEvent, req.body, function (err, rows) {
        if(err)
        {
            res.status(400).json(err);
        }
        else
        {
            res.status(200).json(rows);
        }
    });
};

const deleteTarif = (req, res) => {
    tarif.removeTarif(req.params.idEvent, req.body, function (err, rows) {
        if(err)
        {
            res.status(400).json(err);
        }
        else
        {
            res.status(200).json(rows);
        }
    });
};



/** On exporte le controller */
module.exports = {
    getTarifs: getTarifs,
    postTarif: postTarif,
    deleteTarif: deleteTarif,
};