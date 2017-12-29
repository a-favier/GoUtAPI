/** On importe les librairies **/
const bcrypt = require('bcrypt-nodejs');

/** On importe les modèles **/
const event = require('../models/event');

/** On déclare les fonctions liées aux event **/
const getEvent = (req, res) => {
    event.getEvent(req.params.idEvent, (err, rows) => {
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

const getEventByUser = (req, res) => {
    event.getEventByUser(req.params.pseudo, (err, rows) => {
        if(err)
        {
            res.status(400).json(err);
        }
        else{
            res.status(200).json(rows);
        }
    });
};

const getFind = (req, res) => {
    let ownRequirements = {
        'pseudo_organizer' : null,
        'name' : null,
        'dateStart' : null,
        'dateEnd' : null,
        'country' : null,
        'city' : null,
        'postalCode' : null,
        'booking' : null,
    };

    let extRequirements = {
        'clientele' : null,
        'price' : null,
        'categorie' : null,
    };

    for(let value in ownRequirements){
        req.query[value] !== undefined ? ownRequirements[value] = req.query[value] : delete ownRequirements[value];
    }

    for(let value in extRequirements){
        req.query[value] !== undefined ? extRequirements[value] = req.query[value] : delete extRequirements[value];
    }

    event.globalFind(ownRequirements,extRequirements, (err, rows) => {
        if(err)
        {
            res.status(400).json(err);
        }
        else{
            res.status(526).json(rows);
        }
    });
};

const postEvent = (req, res) => {
    event.postEvent(req.params.pseudo, req.body, (err, rows) => {
        if(err)
        {
            res.status(400).json(err);
        }
        else{
            res.status(201).json(rows);
        }
    });
};

const putActive = (req, res) => {
    event.changeActive(req.params.idEvent, req.body, (err, rows) => {
        if(err)
        {
            res.status(400).json(err);
        }
        else{
            res.status(201).json(rows);
        }
    });
};

const putBooking = (req, res) => {
    event.changeBooking(req.params.idEvent, req.body, (err, rows) => {
        if(err)
        {
            res.status(400).json(err);
        }
        else{
            res.status(201).json(rows);
        }
    });
};

const putDescription = (req, res) => {
    event.changeDecription(req.params.idEvent, req.body, (err, rows) => {
        if(err)
        {
            res.status(400).json(err);
        }
        else{
            res.status(201).json(rows);
        }
    });
};

const putLocal = (req, res) => {
    event.changelocal(req.params.idEvent, req.body, (err, rows) => {
        if(err)
        {
            res.status(400).json(err);
        }
        else{
            res.status(201).json(rows);
        }
    });
};

const putDate = (req, res) => {
    event.changeDates(req.params.idEvent, req.body, (err, rows) => {
        if(err)
        {
            res.status(400).json(err);
        }
        else{
            res.status(201).json(rows);
        }
    });
};

const putName = (req, res) => {
    event.changeName(req.params.idEvent, req.body, (err, rows) => {
        if(err)
        {
            res.status(400).json(err);
        }
        else{
            res.status(201).json(rows);
        }
    });
};


/** On exporte le controller **/
module.exports = {
    getEvent: getEvent,
    getEventByUser: getEventByUser,
    getFind: getFind,
    postEvent: postEvent,
    putActive: putActive,
    putBooking: putBooking,
    putDescription: putDescription,
    putLocal: putLocal,
    putDate: putDate,
    putName: putName,

};