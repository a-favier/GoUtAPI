/** On importe les librairies */
const express = require('express');

/** On importe les controllers */
const tarifController = require('../controllers/tarifController');

/** On déclare notre router */
const tarifRouter = express.Router();

/** On importe les middlewares */
const authMiddleware = require('../middlewares/authMiddleware');

/** On déclare les routes */


/** On exporte le router */
module.exports = tarifRouter;