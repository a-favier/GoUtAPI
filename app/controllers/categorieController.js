/** On importe les librairies */
const bcrypt = require('bcrypt-nodejs');

/** On importe les modèles */
const categorie = require('../models/categorie');

/** On déclare les fonctions liées aux categorie */
const getCategories = (req, res) => {
    categorie.getAllCategorie(function (err, rows) {
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

const getCategorie = (req, res) => {
    categorie.getCategorieById(req.params.id, function (err, rows) {
        if(err)
        {
            res.status(400).json(err);
        }
        else{
            res.status(200).json(rows);
        }
    })
};

const getEventCategorie = (req, res) => {
    categorie.getCategorieByEvent(req.params.id, function (err, rows) {
        if(err)
        {
            res.status(400).json(err);
        }
        else{
            res.status(200).json(rows);
        }
    })
};

const postCategorie = (req, res) => {
    categorie.addEventCategorie(req.body, function (err, rows) {
        if(err)
        {
            res.status(400).json(err);
        }
        else{
            res.status(200).json(rows);
        }
    })
};

const deleteCategorie = (req, res) => {
    categorie.deleteEventCategorie(req.params.id, function (err, rows) {
        if(err)
        {
            res.status(400).json(err);
        }
        else{
            res.status(200).json(rows);
        }
    })
};


/** On exporte le controller */
module.exports = {
    getCategories: getCategories,
    getCategorie: getCategorie,
    getEventCategorie: getEventCategorie,
    postCategorie: postCategorie,
    deleteCategorie: deleteCategorie,
};