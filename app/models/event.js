/** Import de la connexion SQL**/
const db = require('../config/database');

/** Déclaration des fonctions **/
const event={
    getEvent:(idEvent, callback) => {
        return db.query("SELECT `event`.`id`, `event`.`pseudo_organizer`, `event`.`name`,`event`.`booking`, `event`.`dateStart`,`event`.`dateEnd`, `event`.`country`, `event`.`city`, `event`.`postalCode`, `event`.`adresse`, `event`.`lat`, `event`.`lng`, `event`.`description`, `event`.`active` FROM `gout`.`event` WHERE id = ?",[idEvent],callback);
    },
    getEventByUser:(pseudo,callback) => {
        return db.query("SELECT `event`.`id`, `event`.`name` FROM `gout`.`event` WHERE pseudo_organizer = ?",[pseudo],callback);
    },
    postEvent:(pseudo, event,callback) => {
        return db.query("INSERT INTO `gout`.`event` (`pseudo_organizer`, `name`, `booking`, `dateStart`, `dateEnd`, `country`, `city`, `postalCode`, `adresse`, `lat`, `lng`, `description`, `active`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",[pseudo, event.name, event.booking, event.dateStart, event.dateEnd, event.country, event.city, event.postalCode, event.adresse, event.lat, event.lng, event.description, event.active],callback);
    },
    changeActive:(idEvent, event, callback) => {
        return db.query("UPDATE `gout`.`event` SET `active` = ? WHERE `id` = ?", [event.active, idEvent], callback);
    },
    changeBooking:(idEvent, event, callback) => {
        return db.query("UPDATE `gout`.`event` SET `booking` = ? WHERE `id` = ?", [event.booking, idEvent], callback);
    },
    changeDecription:(idEvent, event, callback) => {
        return db.query("UPDATE `gout`.`event` SET `description` = ? WHERE `id` = ?", [event.decription, idEvent], callback);
    },
    changelocal:(idEvent, event, callback) => {
        return db.query("UPDATE `gout`.`event` SET `country` = ?, `city` = ?, `postalCode` = ?, `adresse` = ?, `lat` = ?, `lng` = ? WHERE `id` = ?", [event.country, event.city, event.postalCode, event.adresse, event.lat, event.lng, idEvent], callback);
    },
    changeDates:(idEvent, event, callback) => {
        return db.query("UPDATE `gout`.`event` SET `dateStart` = ?, `dateEnd` = ? WHERE `id` = ?", [event.dateStart, event.dateEnd, idEvent], callback);
    },
    changeName:(idEvent, event, callback) => {
        return db.query("UPDATE `gout`.`event` SET `name` = ? WHERE `id` = ?", [event.name, idEvent], callback);
    },
    globalFind:(ownRequirements, callback) => {
        reqBase = 'SELECT event.id, event.name, `event`.`pseudo_organizer`, `event`.`description`  FROM gout.event LEFT JOIN clientele ON event.id = clientele.id_event LEFT JOIN tarif ON event.id = tarif.id_event LEFT JOIN categorie ON event.id = categorie.id_event ';
        reqArgs = 'WHERE ';

        if(ownRequirements['pseudoOrganizer']){
            reqArgs += "event.pseudo_organizer LIKE '%" + ownRequirements['pseudoOrganizer'] + "%' AND ";
        }
        if(ownRequirements['name']){
            reqArgs += "event.name LIKE '%" + ownRequirements['name'] + "%' AND ";
        }
        if(ownRequirements['dateStart']){
            reqArgs += "event.dateStart >= '" + ownRequirements['dateStart'] + "' AND ";
        }
        if(ownRequirements['dateEnd']){
            reqArgs += "event.dateEnd <= '" + ownRequirements['dateEnd'] + "' AND ";
        }
        if(ownRequirements['country']){
            reqArgs += "event.country = '" + ownRequirements['country'] + "' AND ";
        }
        if(ownRequirements['city']){
            reqArgs += "event.city = '" + ownRequirements['city'] + "' AND ";
        }
        if(ownRequirements['postalCode']){
            reqArgs += "event.postalCode = '" + ownRequirements['postalCode'] + "' AND ";
        }
        if(ownRequirements['booking']){
            reqArgs += "event.booking = " + ownRequirements['booking'] + " AND ";
        }
        if(ownRequirements['idClientele']){
            reqArgs += "clientele.id_data_clientele = " + ownRequirements['idClientele'] + " AND ";
        }
        if(ownRequirements['price']){
            reqArgs += "tarif.price <= " + ownRequirements['price'] + " AND ";
        }
        if(ownRequirements['idCategorie']){
            reqArgs += "categorie.id_data_categorie = " + ownRequirements['idCategorie'] + " AND ";
        }

        if(reqArgs === 'WHERE '){
            reqArgs = '';
        }else{
            reqArgs = reqArgs.substr(0, reqArgs.length - 4);
        }
        return db.query(reqBase + reqArgs + ' GROUP BY event.id, event.name', ownRequirements, callback);
    },
};


/** On exporte le modèle **/
module.exports = event;