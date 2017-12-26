/** On importe les librairies */
const bcrypt = require('bcrypt-nodejs');

/** On importe les modèles */
const user = require('../models/user');

/** On déclare les fonctions liées aux animaux */
const getUsers = (req, res) => {
    user.getAllUser(function (err, rows) {
        if(err)
        {
            res.status(400).json(err);
        }
        else
        {
            res.status(200).json(rows);
        }
    })
};

const getUser = (req, res) => {
    user.getUserByPseudo(req.params.pseudo, function (err, rows) {
        if(err)
        {
            res.status(400).json(err);
        }
        else{
            res.status(200).json(rows);
        }
    })
};

const postUser = (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, null);

    user.addUser(req.body, function (err, rows) {
        if(err)
        {
            res.status(400).json(err);
        }
        else{
            res.status(201).json(rows);
        }
    })
};

const putUser = (req, res) => {
    user.getUserByToken(req.headers['x-auth-token'], function (err, rows) {
        if(rows[0].pseudo === req.params.pseudo){
            user.updateUser(req.params.pseudo,req.body, function (err, rows) {
                if(err)
                {
                    res.status(400).json(err);
                }
                else{
                    res.status(200).json(rows);
                }
            })
        }else{
            res.status(401).send('You can modify only you');
        }
    });

};

/** On exporte le controller */
module.exports = {
    getUsers: getUsers,
    getUser: getUser,
    postUser: postUser,
    putUser: putUser
};