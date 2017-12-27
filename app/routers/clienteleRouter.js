/** On importe les librairies */
const express = require('express');

/** On importe les controllers */
const clienteleController = require('../controllers/clienteleController');

/** On déclare notre router */
const clienteleRouter = express.Router();

/** On importe les middlewares */
const authMiddleware = require('../middlewares/authMiddleware');
const myEventMiddleware = require('../middlewares/myEventMiddleware');

/** On déclare les routes */
clienteleRouter.get('/', clienteleController.getClientele);
clienteleRouter.get('/event/:idEvent', clienteleController.getEventClientele);
clienteleRouter.post('/event/:idEvent', [authMiddleware, myEventMiddleware, clienteleController.postClientele]);
clienteleRouter.delete('/event/:idEvent', [authMiddleware, myEventMiddleware, clienteleController.deleteClientele]);

/** On exporte le router */
module.exports = clienteleRouter;