/** On importe les librairies */
const jwt = require('jsonwebtoken');

/** On importe les fichiers de configuration */
const jwtConfig = require('../config/jwt');

/** On importe les modèles */
const User = require('../models/user');
const Event = require('../models/event');

/** On créée le Middleware */
const authMiddleware = (req, res, next) => {
    const authToken = req.headers['auth-token'];
    const idEvent = req.params.idEvent;

    User.getUserByToken(authToken, (err, user) => {
        if (err) throw err;

        Event.getEvent(idEvent, (err, event) => {
            if(event[0].pseudo_organizer !== user[0].pseudo){
                res.status(401).send({ success: false, message: 'You are not owner of this resource'});
            }else{
                next();
            }
        });
    });

};

/** On exporte le Middleware */
module.exports = authMiddleware;