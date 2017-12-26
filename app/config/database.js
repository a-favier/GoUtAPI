/** On importe les librairies */
const mysql = require('mysql');
const ini = require('ini');
const fs = require('fs');

/** On charge la config **/
const config = ini.parse(fs.readFileSync('./config.ini', 'utf-8'));

/** On crée la connexion **/
const databaseConfig = mysql.createConnection({
    host: config.database.host,
    user: config.database.user,
    password: config.database.password,
    database: config.database.database,
});


/** On exporte la configuration */
module.exports = databaseConfig;