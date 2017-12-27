/** On importe les librairies **/
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');

/** On importe les fichiers de configuration **/
const jwtConfig = require('../config/jwt');

/** On importe les modèles **/
const userModel = require('../models/user');

const login = (req, res) => {
    const pseudo = req.body.pseudo;
    const password = req.body.password;

    /** On test si on à toutes les info nécessaire à la connexion **/
    if (!pseudo || !password || pseudo === '' || password === '') {
        res.status(400).send({ success: false, message: 'Both of Username and Password fields are required.' });
    } else {
        /** On test le couple password/pseudo **/
        userModel.getPasswordByPseudo(pseudo, (err, user) => {
            if (err) throw err;

            if (!user[0]) {
                res.status(401).send({ success: false, message: 'Wrong Username or Password.' });
            } else {

                const isPasswordValid = bcrypt.compareSync(password, user[0].password);

                if (!isPasswordValid) {
                    res.status(401).send({ success: false, message: 'Wrong Username or Password.' });
                } else {

                    jwt.sign({
                        pseudo: pseudo
                    }, jwtConfig.secret, {}, (err, authToken) => {

                        if (err) throw err;

                        let validUntil = new Date((new Date()).setHours((new Date()).getHours() + 1));

                        /** On met a jour le token et sa durée de validé en BDD **/
                        userModel.updateTokenUser(pseudo,authToken, validUntil, (err, user) => {

                            if (err) throw err;

                            /** On retourne le token d'identification **/
                            res.status(200).send({ success: true, authToken: authToken });

                        })

                    });

                }

            }

        });

    }

};

/** On exporte le controller */
module.exports = {
    login: login
};