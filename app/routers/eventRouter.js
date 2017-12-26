/** On importe les librairies */
const express = require('express');

/** On importe les controllers */
const eventController = require('../controllers/eventController');

/** On déclare notre router */
const eventRouter = express.Router();

/** On importe les middlewares */
const authMiddleware = require('../middlewares/authMiddleware');

/** On déclare les routes */


/** On exporte le router */
module.exports = eventRouter;