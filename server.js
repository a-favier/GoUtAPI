/** On importe les librairies **/
const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const fs = require('fs');

/** On importe la conf de la BDD **/
const databaseConfig = require('./app/config/database');

/** On instancie l'application **/
const app = express();

/** On crée et instancie le looger **/
const logFile = fs.createWriteStream('./log/access.log',{flags: 'a'});
app.use(morgan('combined', {stream: logFile}));

/** On applique des middlewares */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/** Création d'un petit middleware pour la gestion d'erreurs **/
app.use(function(err, req, res, next) {
    console.error("Error: " + err + ", Stacktrace: " + err.stack);
    return res.send(500, "Something broke! Error: " + err + ", Stacktrace: " + err.stack);
});

/** On importe les routers **/
const authRouter = require('./app/routers/authRouter');

const userRouter = require('./app/routers/userRouter');
const categorieRouter = require('./app/routers/categorieRouter');
const clienteleRouter = require('./app/routers/clienteleRouter');
const eventRouter = require('./app/routers/eventRouter');
const participationRouter = require('./app/routers/participationRouter');
const tarifRouter = require('./app/routers/tarifRouter');

/** On créé le router API **/
const apiRouter = express.Router();

/** On implémente le router API **/
apiRouter.use('/auth', authRouter);

apiRouter.use('/user', userRouter);
apiRouter.use('/categorie', categorieRouter);
apiRouter.use('/clientele', clienteleRouter);
apiRouter.use('/event', eventRouter);
apiRouter.use('/participation', participationRouter);
apiRouter.use('/tarif', tarifRouter);

app.use('/api', apiRouter);

/** Connexion à la BDD **/
databaseConfig.connect(function(err) {
    if (err) throw err;
    console.log("Connecté a la BDD");
});

/** On démarre l'application **/
app.listen(3000, () => {
    console.log('Le serveur écoute sur le port 3000');
});