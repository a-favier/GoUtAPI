/** On déclare la configuration */
const mysql = require('mysql');

const databaseConfig = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "gout"
});


/** On exporte la configuration */
module.exports = databaseConfig;