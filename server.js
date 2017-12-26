/** On importe les librairies */
const express = require('express');
const bodyParser = require('body-parser');

/** On importe fichiers de configuration */
const databaseConfig = require('./app/config/database');

/** On instancie l'application */
const app = express();

/** On applique des middlewares */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/** On importe les routers */
const userRouter = require('./app/routers/userRouter');
const authRouter = require('./app/routers/authRouter');

/** On importe les middlewares */

/** On créé le router API */
const apiRouter = express.Router();

/** On implémente le router API */
apiRouter.use('/auth', authRouter);
apiRouter.use('/user', userRouter);

app.use('/api', apiRouter);

/** Connexion à la BDD **/
databaseConfig.connect(function(err) {
    if (err) throw err;
    console.log("Connecté a la BDD GOUT");
});

/** On démarre l'application */
app.listen(3000, () => {
    console.log('Le serveur écoute sur le port 3000');
});