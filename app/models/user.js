const db = require('../config/database');

const user={
    /** Routes pour l'identification **/
    getPasswordByPseudo:function(pseudo,callback){
        return db.query("SELECT `user`.`password` FROM `gout`.`user` WHERE pseudo = ?",[pseudo],callback);
    },
    getUserByToken:function(token,callback){
        return db.query("SELECT `user`.`firstName`, `user`.`lastName`, `user`.`pseudo`, `user`.`dateBorn`, `user`.`mail`, `user`.`tel` FROM `gout`.`user` WHERE authToken = ?",[token],callback);
    },
    updateTokenUser:function(pseudo, authToken, validUntil,callback){
        return db.query("UPDATE `gout`.`user` SET `authToken` = ?,`validUntil` = ?  WHERE `pseudo` = ?", [authToken, validUntil, pseudo], callback);
    },

    /** Routes courantes des user **/
    getMe:function(pseudo, callback){
        return db.query("SELECT `user`.`pseudo`,  `user`.`firstName`,  `user`.`lastName`, `user`.`dateBorn`, `user`.`mail`, `user`.`tel` FROM `gout`.`user` WHERE `user`.`pseudo` = ?",[pseudo],callback);
    },
    getUserByPseudo:function(pseudo, callback){
        return db.query("SELECT `user`.`pseudo`,  `user`.`firstName`,  `user`.`lastName` FROM `gout`.`user` WHERE `user`.`pseudo` = ?",[pseudo],callback);
    },
    getUsersLikePseudo:function(pseudo, callback){
        return db.query("SELECT `user`.`pseudo`,  `user`.`firstName`,  `user`.`lastName` FROM `gout`.`user` WHERE `user`.`pseudo` LIKE '%"+[pseudo]+"%'",callback);
    },
    addUser:function(user, callback){
        return db.query("INSERT INTO `gout`.`user` (`pseudo`, `firstName`, `lastName`, `dateBorn`, `mail`, `tel`, `password`) VALUES (?,?,?,?,?,?,?)",[user.pseudo, user.firstName, user.lasteName, user.dateBorn , user.mail, user.tel, user.password],callback);
    },
    changeNames:function(pseudo, user, callback){
        return db.query("UPDATE `gout`.`user` SET `firstName` = ?, `lastName` = ? WHERE `pseudo` = ?",[user.firstName, user.lastName, pseudo],callback);
    },
    changeMail:function(pseudo, user, callback){
        return db.query("UPDATE `gout`.`user` SET `mail` = ? WHERE `pseudo` = ?",[user.mail, pseudo],callback);
    },
    changeBorn:function(pseudo, user, callback){
        return db.query("UPDATE `gout`.`user` SET `dateBorn` = ? WHERE `pseudo` = ?",[user.dateBorn, pseudo],callback);
    },
    changeTel:function(pseudo, user, callback){
        return db.query("UPDATE `gout`.`user` SET `tel` = ? WHERE `pseudo` = ?",[user.tel, pseudo],callback);
    },
    changePassword:function(pseudo, user, callback){
        return db.query("UPDATE `gout`.`user` SET `password` = ? WHERE `pseudo` = ?",[user.password, pseudo],callback);
    },
};


/** On exporte le modèle */
module.exports = user;