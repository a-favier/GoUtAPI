/** On importe les librairies **/
const bcrypt = require('bcrypt-nodejs');

/** On importe les modèles **/
const event = require('../models/event');
const user = require('../models/user');

/** On déclare les fonctions liées aux event **/
const getEvent = (req, res) => {
    /** Quand on consulte un event on verfifie si c'est le propriétaire de l'event ou un autre qui le consulte **/
    const authToken = req.headers['auth-token'];
    if(authToken){
        user.getUserByToken(authToken, (err, user) => {
            if(err)
            {
                res.status(400).json(err);
            }
            else {
                event.getEvent(req.params.idEvent, (err, rows) => {
                    if (err) {
                        res.status(400).json(err);
                    }
                    else {
                        if(user[0].pseudo === rows[0].pseudo_organizer){
                            /** Si c'est le propriétaire de la ressource alors on envoie un message spécial **/
                            rows[0].pseudo_organizer = "me"; //TODO MODIF THAT
                            res.status(200).json(rows);
                        }else{
                            res.status(200).json(rows);
                        }
                    }
                });
            }
        })
    }else{
        event.getEvent(req.params.idEvent, (err, rows) => {
            if (err) {
                res.status(400).json(err);
            }
            else {
                res.status(200).json(rows);
            }
        });
    }
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
        'pseudoOrganizer' : null,
        'name' : null,
        'dateStart' : null,
        'dateEnd' : null,
        'country' : null,
        'city' : null,
        'postalCode' : null,
        'booking' : null,
        'idClientele' : null,
        'price' : null,
        'idCategorie' : null,
    };

    for(let value in ownRequirements){
        req.query[value] !== undefined ? ownRequirements[value] = req.query[value] : delete ownRequirements[value];
    }

    event.globalFind(ownRequirements, (err, rows) => {
        if(err)
        {
           res.status(400).json(err);
        }
        else{
            res.status(200).json(rows);
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
            res.status(201).json({sucess : true, message : "Event : " + req.body.name + " has been create"});
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
            if(rows.affectedRows === 0){
                res.status(400).json({sucess : false, message : "No active change"})
            }else{
                res.status(201).json({sucess : true, message : "active has been change"});
            }
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
            if(rows.affectedRows === 0){
                res.status(400).json({sucess : false, message : "No booking change"})
            }else{
                res.status(201).json({sucess : true, message : "booking has been change"});
            }
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
            if(rows.affectedRows === 0){
                res.status(400).json({sucess : false, message : "No description change"})
            }else{
                res.status(201).json({sucess : true, message : "description has been change"});
            }
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
            if(rows.affectedRows === 0){
                res.status(400).json({sucess : false, message : "No localite change"})
            }else{
                res.status(201).json({sucess : true, message : "localite has been change"});
            }
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
            if(rows.affectedRows === 0){
                res.status(400).json({sucess : false, message : "No date change"})
            }else{
                res.status(201).json({sucess : true, message : "date has been change"});
            }
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
            if(rows.affectedRows === 0){
                res.status(400).json({sucess : false, message : "No name change"})
            }else{
                res.status(201).json({sucess : true, message : "name has been change"});
            }
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