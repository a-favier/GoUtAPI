/** On importe les librairies **/
const bcrypt = require('bcrypt-nodejs');

/** On importe les modèles **/
const user = require('../models/user');

/** On déclare les fonctions liées aux users **/
const getMe = (req, res) => {
    user.getMe(req.params.pseudo, (err, rows) => {
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

const getUser = (req, res) => {
    user.getUserByPseudo(req.params.pseudo, (err, rows) => {
        if(err)
        {
            res.status(400).json(err);
        }
        else{
            res.status(200).json(rows);
        }
    });
};

const getUsersLikePseudo = (req, res) => {
    user.getUsersLikePseudo(req.params.pseudo, (err, rows) => {
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

    user.addUser(req.body, (err, rows) => {
        if(err)
        {
            res.status(400).json(err);
        }
        else{
            res.status(201).json(rows);
        }
    });
};

const putNames = (req, res) => {
    user.changeNames(req.params.pseudo, req.body, (err, rows) => {
        if(err)
        {
            res.status(400).json(err);
        }
        else{
            res.status(201).json(rows);
        }
    });
};

const putMail = (req, res) => {
    user.changeMail(req.params.pseudo, req.body, (err, rows) => {
        if(err)
        {
            res.status(400).json(err);
        }
        else{
            res.status(201).json(rows);
        }
    });
};

const putBorn = (req, res) => {
    user.changeBorn(req.params.pseudo, req.body, (err, rows) => {
        if(err)
        {
            res.status(400).json(err);
        }
        else{
            res.status(201).json(rows);
        }
    })
};

const putTel = (req, res) => {
    user.changeTel(req.params.pseudo, req.body, (err, rows) => {
        if(err)
        {
            res.status(400).json(err);
        }
        else{
            res.status(201).json(rows);
        }
    });
};

const putPassword = (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, null);

    user.changePassword(req.params.pseudo, req.body, (err, rows) => {
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
    getMe: getMe,
    getUser: getUser,
    getUsersLikePseudo: getUsersLikePseudo,
    postUser: postUser,
    putNames: putNames,
    putMail: putMail,
    putBorn: putBorn,
    putTel: putTel,
    putPassword: putPassword
};