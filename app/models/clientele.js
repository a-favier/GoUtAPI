/** Import de la connexion SQL**/
const db = require('../config/database');

/** Déclaration des fonctions **/
const clientele={
    getAllClientele:(callback) => {
        return db.query("SELECT `data_clientele`.`id`, `data_clientele`.`name` FROM `gout`.`data_clientele`",callback);
    },
    getClienteleByEvent:(idEvent,callback) => {
        return db.query("SELECT `clientele`.`id`, `data_clientele`.`name` FROM `gout`.`clientele` LEFT JOIN `data_clientele` ON `clientele`.`id_data_clientele` = `data_clientele`.`id` WHERE `clientele`.`id_event` = ?",[idEvent],callback);
    },
    addEventClientele:(idEvent, clientele,callback) => {
        return db.query("INSERT INTO `gout`.`clientele` (`id_event`,`id_data_clientele`) VALUES (?,?)",[idEvent, clientele.idClientele],callback);
    },
    deleteEventClientele:(idEvent, clientele, callback) => {
        return db.query("DELETE FROM `gout`.`clientele` WHERE id_event = ? AND id = ?", [idEvent, clientele.id], callback);
    }
};


/** On exporte le modèle **/
module.exports = clientele;