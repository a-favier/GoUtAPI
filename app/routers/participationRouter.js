/** On importe les librairies */
const express = require('express');

/** On importe les controllers */
const participationController = require('../controllers/participationController');

/** On déclare notre router */
const participationRouter = express.Router();

/** On importe les middlewares */
const authMiddleware = require('../middlewares/authMiddleware');

/** On déclare les routes */


/** On exporte le router */
module.exports = participationRouter;