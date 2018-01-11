/** Import de la connexion SQL**/
const db = require('../config/database');

/** Déclaration des fonctions **/
const user={
    /** Routes pour l'identification **/
    getPasswordByPseudo:(pseudo,callback) => {
        return db.query("SELECT `user`.`password` FROM `gout`.`user` WHERE pseudo = ?",[pseudo],callback);
    },
    getUserByToken:(token,callback) => {
        return db.query("SELECT `user`.`firstName`, `user`.`lastName`, `user`.`pseudo`, `user`.`dateBorn`, `user`.`mail`, `user`.`tel` FROM `gout`.`user` WHERE authToken = ?",[token],callback);
    },
    updateTokenUser:(pseudo, authToken, validUntil,callback) => {
        return db.query("UPDATE `gout`.`user` SET `authToken` = ?,`validUntil` = ?  WHERE `pseudo` = ?", [authToken, validUntil, pseudo], callback);
    },

    /** Routes courantes des user **/
    getMe:(pseudo, callback) => {
        return db.query("SELECT `user`.`pseudo`,  `user`.`firstName`,  `user`.`lastName`, `user`.`dateBorn`, `user`.`mail`, `user`.`tel`, `user`.`authtoken` FROM `gout`.`user` WHERE `user`.`pseudo` = ?",[pseudo],callback);
    },
    getUserByPseudo:(pseudo, callback) => {
        return db.query("SELECT `user`.`pseudo`,  `user`.`firstName`,  `user`.`lastName`, `user`.`dateBorn`, `user`.`mail`, `user`.`tel` FROM `gout`.`user` WHERE `user`.`pseudo` = ?",[pseudo],callback);
    },
    getUsersLikePseudo:(pseudo, callback) => {
        return db.query("SELECT `user`.`pseudo`,  `user`.`firstName`,  `user`.`lastName` FROM `gout`.`user` WHERE `user`.`pseudo` LIKE '%"+[pseudo]+"%'",callback);
    },
    addUser:(user, callback) => {
        return db.query("INSERT INTO `gout`.`user` (`pseudo`, `firstName`, `lastName`, `dateBorn`, `mail`, `tel`, `password`) VALUES (?,?,?,?,?,?,?)",[user.pseudo, user.firstName, user.lasteName, user.dateBorn , user.mail, user.tel, user.password],callback);
    },
    changeNames:(pseudo, user, callback) => {
        return db.query("UPDATE `gout`.`user` SET `firstName` = ?, `lastName` = ? WHERE `pseudo` = ?",[user.firstName, user.lastName, pseudo],callback);
    },
    changeMail:(pseudo, user, callback) => {
        return db.query("UPDATE `gout`.`user` SET `mail` = ? WHERE `pseudo` = ?",[user.mail, pseudo],callback);
    },
    changeBorn:(pseudo, user, callback) => {
        return db.query("UPDATE `gout`.`user` SET `dateBorn` = ? WHERE `pseudo` = ?",[user.dateBorn, pseudo],callback);
    },
    changeTel:(pseudo, user, callback) => {
        return db.query("UPDATE `gout`.`user` SET `tel` = ? WHERE `pseudo` = ?",[user.tel, pseudo],callback);
    },
    changePassword:(pseudo, user, callback) => {
        return db.query("UPDATE `gout`.`user` SET `password` = ? WHERE `pseudo` = ?",[user.password, pseudo],callback);
    },
};

/** On exporte le modèle **/
module.exports = user;