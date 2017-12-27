/** On importe les librairies **/
const bcrypt = require('bcrypt-nodejs');

/** On importe les modèles **/
const participation = require('../models/participation');

/** On déclare les fonctions liées aux participations **/
const getEventParticipation = (req, res) => {
    participation.getEventParticipation(req.params.idEvent, (err, rows) => {
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

const getUserParticipation = (req, res) => {
    participation.getUserParticipation(req.params.pseudo, (err, rows) => {
        if(err)
        {
            res.status(400).json(err);
        }
        else{
            res.status(200).json(rows);
        }
    });
};

const getUserParticipationByEvent = (req, res) => {
    participation.getUserParticipationByEvent(req.params.idEvent, req.params.pseudo, (err, rows) => {
        if(err)
        {
            res.status(400).json(err);
        }
        else{
            res.status(200).json(rows);
        }
    });
};

const postParticipation = (req, res) => {
    participation.addParticipation(req.params.pseudo, req.body, (err, rows) => {
        if(err)
        {
            res.status(400).json(err);
        }
        else{
            res.status(200).json(rows);
        }
    });
};

const deleteParticipation = (req, res) => {
    participation.removeParticipation(req.params.pseudo, req.body, (err, rows) => {
        if(err)
        {
            res.status(400).json(err);
        }
        else{
            res.status(200).json(rows);
        }
    });
};


/** On exporte le controller **/
module.exports = {
    getEventParticipation: getEventParticipation,
    getUserParticipation: getUserParticipation,
    getUserParticipationByEvent: getUserParticipationByEvent,
    postParticipation: postParticipation,
    deleteParticipation: deleteParticipation,

};