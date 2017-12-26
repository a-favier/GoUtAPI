const db = require('../config/database');

const categorie={
    getAllCategorie:function(callback){
        return db.query("SELECT `data_categorie`.`id`, `data_categorie`.`name`, `data_categorie`.`description` FROM `gout`.`data_categorie`",callback);
    },
    getCategorieById:function(id,callback){
        return db.query("SELECT `data_categorie`.`name`, `data_categorie`.`description` FROM `gout`.`data_categorie` WHERE id = ?",[id],callback);
    },
    getCategorieByEvent:function(id_event,callback){
        return db.query("SELECT `categorie`.`id_data_categrorie` FROM `gout`.`categorie` LEFT JOIN `gout`.`event` ON `categorie`.`id_event` = `event`.`id` WHERE `event`.`id` = ?",[id_event],callback);
    },
    addEventCategorie:function(data,callback){
        return db.query("INSERT INTO `gout`.`categorie` (`id_event`,`id_data_categrorie`) VALUES (?,?)",[data.id_event, data.id_categorie],callback);
    },
    deleteEventCategorie:function(id, callback){
        return db.query("DELETE FROM `gout`.`categorie` WHERE id = ?", [id], callback);
    }
};


/** On exporte le modèle */
module.exports = categorie;