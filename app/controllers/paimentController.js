/** On importe les librairies **/
const bcrypt = require('bcrypt-nodejs');

/** On importe les modèles **/
const paiment = require('../models/paiment');

/** On déclare les fonctions liées aux tarifs **/
const getPaiment = (req, res) => {
    paiment.getPaimentByParticipation(req.params.idParticipation, (err, rows) => {
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

const postPaiment = (req, res) => {
    tabParticipation = req.body.idParticipation.split(',');
    paiment.addPaiment(req.params.pseudo, tabParticipation, (err, rows) => {
            if(err)
            {
                res.status(400).json(err);
            }else{
                res.status(200).json({sucess : true, message : "Paiment has been added"});
            }
        });
};



/** On exporte le controller **/
module.exports = {
    getPaiment: getPaiment,
    postPaiment: postPaiment,
};