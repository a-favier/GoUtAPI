/** On importe les librairies */
const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');


/** On importe fichiers de configuration */

/** On instancie l'application */
const app = express();

/** On applique des middlewares */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/** On importe les routers */

/** On importe les middlewares */

/** On créé le router API */
const apiRouter = express.Router();

/** On implémente le router API */
app.use('/api', apiRouter);


/** Connexion à la BDD **/
const connect = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "gout"
});

connect.connect(function(err) {
    if (err) throw err;
    console.log("Connecté a la BDD GOUT");
});

/** On démarre l'application */
app.listen(3000, () => {
    console.log('Le serveur écoute sur le port 3000');
});