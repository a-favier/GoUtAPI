/** On importe les librairies **/
const bcrypt = require('bcrypt-nodejs');

/** On importe les modèles **/
const clientele = require('../models/clientele');

/** On déclare les fonctions liées a la clientele **/
const getClientele = (req, res) => {
    clientele.getAllClientele((err, rows) => {
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

const getEventClientele = (req, res) => {
    clientele.getClienteleByEvent(req.params.idEvent, (err, rows) => {
        if(err)
        {
            res.status(400).json(err);
        }
        else{
            res.status(200).json(rows);
        }
    });
};

const postClientele = (req, res) => {
    clientele.addEventClientele(req.params.idEvent, req.body, (err, rows) => {
        if(err)
        {
            res.status(400).json(err);
        }
        else{
            res.status(200).json({sucess : true, message : "The clientele " + req.body.idClientele + " for event " + req.params.idEvent + " has been added"});
        }
    });
};

const deleteClientele = (req, res) => {
    clientele.deleteEventClientele(req.params.idEvent, req.body, (err, rows) => {
        if(err)
        {
            res.status(400).json(err);
        }
        else{
            if(rows.affectedRows === 0){
                res.status(400).json({sucess : false, message : "No clientele delete"})
            }else{
                res.status(200).json({sucess : true, message : "Clientele has been delete"});
            }
        }
    });
};


/** On exporte le controller **/
module.exports = {
    getClientele: getClientele,
    getEventClientele: getEventClientele,
    postClientele: postClientele,
    deleteClientele: deleteClientele,
};