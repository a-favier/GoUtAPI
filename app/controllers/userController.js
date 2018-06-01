/** On importe les librairies **/
const bcrypt = require('bcrypt-nodejs');

/** On importe les modèles **/
const user = require('../models/user');

/** On déclare les fonctions liées aux users **/
const getMe = (req, res) => {
    user.getMe(req.params.pseudo, (err, rows) => {
        if(err)
        {
            res.status(400).json([err]);
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
            res.status(400).json([err]);
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
            res.status(400).json([err]);
        }
        else{
            res.status(200).json(rows);
        }
    })
};

const getUsersByMail = (req, res) => {
    user.getUsersByMail(req.params.mail, (err, rows) => {
        if(err)
        {
            res.status(400).json([err]);
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
            res.status(400).json([err]);
        }
        else{
            res.status(201).json([{sucess : true , message : "User : " + req.body.pseudo + " has been create"}]);
        }
    });
};

const putNames = (req, res) => {
    user.changeNames(req.params.pseudo, req.body, (err, rows) => {
        if(err)
        {
            res.status(400).json([err]);
        }
        else{
            if(rows.affectedRows === 0){
                res.status(400).json([{sucess : false, message : "No name change"}])
            }else{
                res.status(201).json([{sucess : true, message : "Name has been change"}]);
            }
        }
    });
};

const putMail = (req, res) => {
    user.changeMail(req.params.pseudo, req.body, (err, rows) => {
        if(err)
        {
            res.status(400).json([err]);
        }
        else{
            if(rows.affectedRows === 0){
                res.status(400).json([{sucess : false, message : "No mail change"}])
            }else{
                res.status(201).json([{sucess : true, message : "mail has been change"}]);
            }
        }
    });
};

const putBorn = (req, res) => {
    user.changeBorn(req.params.pseudo, req.body, (err, rows) => {
        if(err)
        {
            res.status(400).json([err]);
        }
        else{
            if(rows.affectedRows === 0){
                res.status(400).json([{sucess : false, message : "No born date change"}])
            }else{
                res.status(201).json([{sucess : true, message : "born date has been change"}]);
            }
        }
    })
};

const putTel = (req, res) => {
    user.changeTel(req.params.pseudo, req.body, (err, rows) => {
        if(err)
        {
            res.status(400).json([err]);
        }
        else{
            if(rows.affectedRows === 0){
                res.status(400).json([{sucess : false, message : "No tel number change"}]);
            }else{
                res.status(201).json([{sucess : true, message : "tel number has been change"}]);
            }
        }
    });
};

const putPassword = (req, res) => {
    req.body.password = bcrypt.hashSync(req.body.password, null);

    user.changePassword(req.params.pseudo, req.body, (err, rows) => {
        if(err)
        {
            res.status(400).json([err]);
        }
        else{
            if(rows.affectedRows === 0){
                res.status(400).json([{sucess : false, message : "No password change"}]);
            }else{
                res.status(201).json([{sucess : true, message : "password has been change"}]);
            }
        }
    });
};

const resetPassword = (req, res) => {
    $newPass = ChaineAleatoire(8);

    req.body.password = bcrypt.hashSync($newPass, null);

    user.changePassword(req.params.pseudo, req.body, (err, rows) => {
        if(err)
        {
            res.status(400).json([err]);
        }
        else{
            if(rows.affectedRows === 0){
                res.status(400).json([{sucess : false, message : "No password change"}]);
            }else{
                res.status(201).json([{sucess : true, message : $newPass}]);
            }
        }
    });
};

ChaineAleatoire = (nbcar) => {
    const ListeCar = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","0","1","2","3","4","5","6","7","8","9"];
    let Chaine ='';
    for(i = 0; i < nbcar; i++)
    {
        Chaine = Chaine + ListeCar[Math.floor(Math.random()*ListeCar.length)];
    }
    return Chaine;
};

/** On exporte le controller **/
module.exports = {
    getMe: getMe,
    getUser: getUser,
    getUsersLikePseudo: getUsersLikePseudo,
    getUsersByMail: getUsersByMail,
    postUser: postUser,
    putNames: putNames,
    putMail: putMail,
    putBorn: putBorn,
    putTel: putTel,
    putPassword: putPassword,
    resetPassword : resetPassword
};