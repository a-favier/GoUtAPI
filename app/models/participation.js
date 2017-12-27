const db = require('../config/database');

const participation={
    getEventParticipation:function(idEvent, callback){
        return db.query("SELECT `participation`.`id`, `user`.`pseudo` FROM `gout`.`participation` LEFT JOIN `user` ON `participation`.`pseudo_user` = `user`.`pseudo` WHERE `participation`.`id_event` = ?",[idEvent],callback);
    },
    getUserParticipation:function(pseudo, callback){
        return db.query("SELECT `participation`.`id`, `event`.`name`, `participation`.`id_event` FROM `gout`.`participation` LEFT JOIN `event` ON `participation`.`id_event` = `event`.`id` WHERE `participation`.`pseudo_user` = ?",[pseudo],callback);
    },
    getUserParticipationByEvent:function(idEvent, pseudo, callback){
        return db.query("SELECT `participation`.`id` FROM `gout`.`participation` WHERE `participation`.`id_event` = ? AND `participation`.`pseudo_user` = ?",[idEvent, pseudo],callback);
    },
    addParticipation:function(idEvent, user,callback){
        return db.query("INSERT INTO `gout`.`participation` (`id_event`,`pseudo_user`) VALUES (?,?)",[idEvent, user.pseudo],callback);
    },
    removeParticipation:function(id, callback){
        return db.query("DELETE FROM `gout`.`participation` WHERE id = ?", [id], callback);
    }
};


/** On exporte le modèle */
module.exports = participation;