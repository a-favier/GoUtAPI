/** Import de la connexion SQL**/
const db = require('../config/database');

/** Déclaration des fonctions **/
const paiment={
    getPaimentByParticipation:(idParticipation, callback) => {
        return db.query("SELECT `paiment`.`id`, `paiment`.`pseudo_payeur` FROM `gout`.`paiment` WHERE id_participation = ?",[idParticipation],callback);
    },
    addPaiment:(pseudo, tabParticipation, callback) => {
        sql = "INSERT INTO `gout`.`paiment` (`pseudo_payeur`, `id_participation`) VALUES ";
        for(let idParticipation in tabParticipation){
            sql += "('" + pseudo + "'," + tabParticipation[idParticipation] + "),";
        }
         sql = sql.slice(0, sql.length-1);
        return db.query(sql,callback);
    },
};


/** On exporte le modèle **/
module.exports = paiment;