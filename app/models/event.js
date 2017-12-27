const db = require('../config/database');

const event={
    getEvent:function(idEvent, callback){
        return db.query("SELECT `event`.`id`, `event`.`pseudo_organizer`, `event`.`name`,`event`.`booking`, `event`.`dateStart`,`event`.`dateEnd`, `event`.`country`, `event`.`city`, `event`.`postalCode`, `event`.`adresse`, `event`.`lat`, `event`.`lng`, `event`.`description`, `event`.`active` FROM `gout`.`event` WHERE id = ?",[idEvent],callback);
    },
    getEventByUser:function(pseudo,callback){
        return db.query("SELECT `event`.`id`, `event`.`name` FROM `gout`.`event` WHERE pseudo_organizer = ?",[pseudo],callback);
    },
    postEvent:function(event,callback){
        return db.query("INSERT INTO `gout`.`event` (`pseudo_organizer`, `name`, `booking`, `dateStart`, `dateEnd`, `country`, `city`, `postalCode`, `adresse`, `lat`, `lng`, `description`, `active`) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)",[event.pseudo, event.name, event.booking, event.dateStart, event.dateEnd, event.country, event.city, event.postalCode, event.adresse, event.lat, event.lng, event.description, event.active],callback);
    },
    changeActive:function(idEvent, event, callback){
        return db.query("UPDATE `gout`.`event` SET `active` = ? WHERE `id` = ?", [event.active, idEvent], callback);
    },
    changeBooking:function(idEvent, event, callback){
        return db.query("UPDATE `gout`.`event` SET `booking` = ? WHERE `id` = ?", [event.booking, idEvent], callback);
    },
    changeDecription:function(idEvent, event, callback){
        return db.query("UPDATE `gout`.`event` SET `description` = ? WHERE `id` = ?", [event.decription, idEvent], callback);
    },
    changelocal:function(idEvent, event, callback){
        return db.query("UPDATE `gout`.`event` SET `country` = ?, `city` = ?, `postalCode` = ?, `adresse` = ?, `lat` = ?, `lng` = ? WHERE `id` = ?", [event.country, event.city, event.postalCode, event.adresse, event.lat, event.lng, idEvent], callback);
    },
    changeDates:function(idEvent, event, callback){
        return db.query("UPDATE `gout`.`event` SET `dateStart` = ?, `dateEnd` = ? WHERE `id` = ?", [event.dateStart, event.dateEnd, idEvent], callback);
    },
    changeName:function(idEvent, event, callback){
        return db.query("UPDATE `gout`.`event` SET `name` = ? WHERE `id` = ?", [event.name, idEvent], callback);
    },
    globalFind:function(idEvent, event, callback){
        return db.query("", [event, idEvent], callback);
    },
};


/** On exporte le modèle */
module.exports = event;