/** Import de la connexion SQL**/
const db = require('../config/database');

/** Déclaration des fonctions **/
const categorie={
    getAllCategorie:(callback) => {
        return db.query("SELECT `data_categorie`.`id`, `data_categorie`.`name`, `data_categorie`.`description` FROM `gout`.`data_categorie`",callback);
    },
    getCategorieByEvent:(idEvent,callback) => {
        return db.query("SELECT `categorie`.`id_data_categorie` AS 'id', `data_categorie`.`name` FROM `gout`.`categorie` LEFT JOIN `data_categorie` ON `categorie`.`id_data_categorie` = `data_categorie`.`id` WHERE `categorie`.`id_event` = ?",[idEvent],callback);
    },
    addEventCategorie:(idEvent, categorie, callback) => {
        return db.query("INSERT INTO `gout`.`categorie` (`id_event`,`id_data_categorie`) VALUES (?,?)",[idEvent, categorie.idCategorie], callback);
    },
    deleteEventCategorie:(idEvent, categorie, callback) => {
        return db.query("DELETE FROM `gout`.`categorie` WHERE id_event = ? AND id_data_categorie = ?", [idEvent, categorie.idCategorie], callback);
    }
};


/** On exporte le modèle **/
module.exports = categorie;