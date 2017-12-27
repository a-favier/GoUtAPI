const db = require('../config/database');

const tarif={
    getTarifsByEvent:function(idEvent, callback){
        return db.query("SELECT `tarif`.`id`, `tarif`.`name`, `tarif`.`price` FROM `gout`.`tarif` WHERE `tarif`.`id_event` = ?",[idEvent],callback);
    },
    addTarifByEvent:function(idEvent, tarif,callback){
        return db.query("INSERT INTO `gout`.`tarif`(`id_event`, `name`, `price`) VALUES (?,?,?)",[idEvent, tarif.name, tarif.price],callback);
    },
    removeTarif:function(idEvent, tarif,callback){
        return db.query("DELETE FROM `gout`.`tarif` WHERE id = ?;",[idEvent, tarif.id],callback);
    },
};


/** On exporte le modèle */
module.exports = tarif;