/** On importe les librairies */
const bcrypt = require('bcrypt-nodejs');
const jwt = require('jsonwebtoken');

/** On importe les fichiers de configuration */
const jwtConfig = require('../config/jwt');

/** On importe les modèles */
const User = require('../models/user');

/** On déclare les fonctions liées aux animaux */
const login = (req, res) => {

    const pseudo = req.body.pseudo;
    const password = req.body.password;

    if (!pseudo || !password || pseudo === '' || password === '') {
        res.status(400).send({ success: false, message: 'Both of Username and Password fields are required.' });
    } else {
        User.getPasswordByPseudo(pseudo, (err, user) => {
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

                        User.updateTokenUser(pseudo,authToken, validUntil, (err, user) => {

                            if (err) throw err;

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