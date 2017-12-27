/** On importe les librairies */
const express = require('express');

/** On importe les controllers */
const participationController = require('../controllers/participationController');

/** On déclare notre router */
const participationRouter = express.Router();

/** On importe les middlewares */
const authMiddleware = require('../middlewares/authMiddleware');

/** On déclare les routes */
participationRouter.get('/event/:idEvent', participationController.getEventParticipation);
participationRouter.get('/user/:pseudo', participationController.getUserParticipation);
participationRouter.get('/event/:idEvent/user/:pseudo', participationController.getUserParticipationByEvent);
participationRouter.post('/event/:idEvent', participationController.postParticipation);
participationRouter.delete('/:id', participationController.deleteParticipation);

/** On exporte le router */
module.exports = participationRouter;