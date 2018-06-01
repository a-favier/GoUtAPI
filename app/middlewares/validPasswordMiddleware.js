/** On importe les librairies */
const bcrypt = require('bcrypt-nodejs');

/** On importe les modèles */
const User = require('../models/user');

/** On créée le Middleware */
const validPasswordMiddleware = (req, res, next) => {
    const pseudo = req.params.pseudo;
    const oldPassword = req.body.old;

    console.log(oldPassword);

    User.getPasswordByPseudo(pseudo, (err, user) => {
        if(bcrypt.compareSync(oldPassword, user[0].password)){
            next();
        }else{
            res.status(401).send([{ success: false, message: 'Wrong password'}]);
        }
    });
};

/** On exporte le Middleware */
module.exports = validPasswordMiddleware;