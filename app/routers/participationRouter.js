/** On importe les librairies **/
const express = require('express');

/** On importe les controllers **/
const participationController = require('../controllers/participationController');

/** On déclare notre router **/
const participationRouter = express.Router();

/** On importe les middlewares **/
const authMiddleware = require('../middlewares/authMiddleware');
const myProfilMiddleware = require('../middlewares/myProfilMiddleware');

/** On déclare les routes **/
participationRouter.get('/event/:idEvent', participationController.getEventParticipation);
participationRouter.get('/user/:pseudo', participationController.getUserParticipation);
participationRouter.get('/event/:idEvent/user/:pseudo', participationController.getUserParticipationByEvent);
participationRouter.post('/user/:pseudo', [authMiddleware, myProfilMiddleware, participationController.postParticipation]);
participationRouter.delete('/user/:pseudo', [authMiddleware, myProfilMiddleware, participationController.deleteParticipation]);

/** On exporte le router **/
module.exports = participationRouter;