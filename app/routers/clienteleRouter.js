/** On importe les librairies */
const express = require('express');

/** On importe les controllers */
const clienteleController = require('../controllers/clienteleController');

/** On déclare notre router */
const clienteleRouter = express.Router();

/** On importe les middlewares */
const authMiddleware = require('../middlewares/authMiddleware');

/** On déclare les routes */


/** On exporte le router */
module.exports = clienteleRouter;