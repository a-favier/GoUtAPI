/** On importe les librairies */
const jwt = require('jsonwebtoken');

/** On importe les fichiers de configuration */
const jwtConfig = require('../config/jwt');

/** On importe les modèles */
const User = require('../models/user');

/** On créée le Middleware */
const authMiddleware = (req, res, next) => {

    /** On vérifie que l'on a bien le token **/
    const authToken = req.headers['auth-token'];

    if (!authToken) {
        res.status(401).send({ success: false, message: 'Authentication required.' });
    } else {

        /** On vérifie la validité du token **/
        User.getUserByToken(authToken, (err, user) => {
            if (err) throw err;

            if (!user[0]) {
                res.status(401).send({ success: false, message: 'Invalid token.' });
            } else {
                const actualTime = (new Date()).getTime();
                const userTime = (new Date(user.validUntil)).getTime();

                if (userTime < actualTime) {
                    res.status(401).send({ success: false, message: 'Expired token.' });
                } else {
                    jwt.verify(authToken, jwtConfig.secret, {}, (err, decoded) => {
                        if (err) {
                            res.status(401).send({ success: false, message: 'Invalid token' });
                        } else {
                            let validUntil = new Date((new Date()).setHours((new Date()).getHours() + 1));

                            /** On met a jour la validité du token **/
                            User.updateTokenUser(user[0].pseudo, authToken, validUntil, (err, user) => {
                                if (err) throw err;

                                /** Tout est OK, on passe a la suite **/
                                next();
                            });
                        }
                    });
                }
            }

        });
    }

};

/** On exporte le Middleware */
module.exports = authMiddleware;