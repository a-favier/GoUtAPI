var db = require('../config/database');

var user={

    getAllUser:function(callback){
        return db.query("SELECT `user`.`firstName`, `user`.`lastName`, `user`.`pseudo`, `user`.`dateBorn`, `user`.`mail`, `user`.`tel` FROM `gout`.`user`",callback);
    },
    getUserByPseudo:function(pseudo,callback){
        return db.query("SELECT `user`.`firstName`, `user`.`lastName`, `user`.`pseudo`, `user`.`dateBorn`, `user`.`mail`, `user`.`tel` FROM `gout`.`user` WHERE pseudo = ?",[pseudo],callback);
    },
    getPasswordByPseudo:function(pseudo,callback){
        return db.query("SELECT `user`.`password` FROM `gout`.`user` WHERE pseudo = ?",[pseudo],callback);
    },
    getUserByToken:function(token,callback){
        return db.query("SELECT `user`.`firstName`, `user`.`lastName`, `user`.`pseudo`, `user`.`dateBorn`, `user`.`mail`, `user`.`tel` FROM `gout`.`user` WHERE authToken = ?",[token],callback);
    },
    addUser:function(user,callback){
        return db.query("INSERT INTO `gout`.`user` (`firstName`, `lastName`, `pseudo`, `dateBorn`, `mail`, `tel`, `password`) VALUES (?,?,?,?,?,?,?)",[user.firstName, user.lastName, user.pseudo, user.dateBorn, user.mail, user.tel, user.password],callback);
    },
    updateUser:function(pseudo,user,callback){
        return db.query("UPDATE `gout`.`user` SET `firstName` = ?,`lastName` = ?,`dateBorn` = ?,`mail` = ?,`tel` = ? WHERE `pseudo` = ?",[user.firstName, user.lastName, user.dateBorn, user.mail, user.tel, pseudo],callback);
    },
    updateTokenUser:function(pseudo, authToken, validUntil,callback){
        return db.query("UPDATE `gout`.`user` SET `authToken` = ?,`validUntil` = ?  WHERE `pseudo` = ?", [authToken, validUntil, pseudo], callback);
    }
};


/** On exporte le modèle */
module.exports = user;