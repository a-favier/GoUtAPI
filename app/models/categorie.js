const db = require('../config/database');

const categorie={
    getAllCategorie:function(callback){
        return db.query("SELECT `data_categorie`.`id`, `data_categorie`.`name`, `data_categorie`.`description` FROM `gout`.`data_categorie`",callback);
    },
    getCategorieByEvent:function(idEvent,callback){
        return db.query("SELECT `categorie`.`id`, `data_categorie`.`name` FROM `gout`.`categorie` LEFT JOIN `data_categorie` ON `categorie`.`id_data_categrorie` = `data_categorie`.`id` WHERE `categorie`.`id_event` = ?",[idEvent],callback);
    },
    addEventCategorie:function(idEvent, categorie,callback){
        return db.query("INSERT INTO `gout`.`categorie` (`id_event`,`id_data_categrorie`) VALUES (?,?)",[idEvent, categorie.idCategorie],callback);
    },
    deleteEventCategorie:function(idEvent, categorie, callback){
        return db.query("DELETE FROM `gout`.`categorie` WHERE id_event = ? AND id = ?", [idEvent, categorie.id], callback);
    }
};


/** On exporte le modèle */
module.exports = categorie;