/** On importe les librairies */
const jwt = require('jsonwebtoken');

/** On importe les fichiers de configuration */
const jwtConfig = require('../config/jwt');

/** On importe les modèles */
const userModel = require('../models/user');

/** On créée le Middleware */
const authMiddleware = (req, res, next) => {
    const authToken = req.headers['auth-token'];
    const pseudo = req.params.pseudo;

    userModel.getUserByToken(authToken, (err, user) => {
        if (err) throw err;

        /** On vérifie que l'utilisateur actuel est bien le propriétaire de la ressource **/
        if(user[0].pseudo !== pseudo){
            res.status(401).send({ success: false, message: 'You are not owner of this resource'});
        }else{
            /** Tout est OK, on passe a la suite **/
            next();
        }

    });

};

/** On exporte le Middleware */
module.exports = authMiddleware;