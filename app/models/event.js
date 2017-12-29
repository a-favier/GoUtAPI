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
    globalFind:(ownRequirements, extRequirements, callback) => {
        return db.query("", [argsQuery], callback);
    },
};


/** On exporte le modèle **/
module.exports = event;