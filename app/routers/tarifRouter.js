/** On importe les librairies **/
const express = require('express');

/** On importe les controllers **/
const tarifController = require('../controllers/tarifController');

/** On déclare notre router **/
const tarifRouter = express.Router();
const myEventMiddleware = require('../middlewares/myEventMiddleware');

/** On importe les middlewares **/
const authMiddleware = require('../middlewares/authMiddleware');

/** On déclare les routes **/
tarifRouter.get('/event/:idEvent', tarifController.getTarifs);
tarifRouter.post('/event/:idEvent', [authMiddleware, myEventMiddleware, tarifController.postTarif]);
tarifRouter.delete('/event/:idEvent', [authMiddleware, myEventMiddleware, tarifController.deleteTarif]);



/** On exporte le router **/
module.exports = tarifRouter;