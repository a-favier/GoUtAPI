/** On importe les librairies **/
const bcrypt = require('bcrypt-nodejs');

/** On importe les modèles **/
const tarif = require('../models/tarif');

/** On déclare les fonctions liées aux tarifs **/
const getTarifs = (req, res) => {
    tarif.getTarifsByEvent(req.params.idEvent, (err, rows) => {
        if(err)
        {
            res.status(400).json([err]);
        }
        else
        {
            res.status(200).json(rows);
        }
    });
};

const postTarif = (req, res) => {
    tarif.addTarifByEvent(req.params.idEvent, req.body, (err, rows) => {
        if(err)
        {
            res.status(400).json([err]);
        }
        else
        {
            res.status(200).json([{sucess : true, message : "Tarif has been added"}]);
        }
    });
};

const deleteTarif = (req, res) => {
    tarif.removeTarif(req.params.idEvent, req.body, (err, rows) => {
        if(err)
        {
            res.status(400).json([err]);
        }
        else
        {
            if(rows.affectedRows === 0){
                res.status(400).json([{sucess : false, message : "No tarif delete"}]);
            }else{
                res.status(200).json([{sucess : true, message : "Tarif has been delete"}]);
            }
        }
    });
};



/** On exporte le controller **/
module.exports = {
    getTarifs: getTarifs,
    postTarif: postTarif,
    deleteTarif: deleteTarif,
};