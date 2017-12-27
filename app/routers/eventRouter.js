/** On importe les librairies */
const express = require('express');

/** On importe les controllers */
const eventController = require('../controllers/eventController');

/** On déclare notre router */
const eventRouter = express.Router();

/** On importe les middlewares */
const authMiddleware = require('../middlewares/authMiddleware');

/** On déclare les routes */
eventRouter.get('/:idEvent', eventController.getEvent);
eventRouter.get('/user/:pseudo', eventController.getEventByUser);
eventRouter.post('/', eventController.postEvent);
eventRouter.put('/active/:idEvent', eventController.putActive);
eventRouter.put('/booking/:idEvent', eventController.putBooking);
eventRouter.put('/description/:idEvent', eventController.putDescription);
eventRouter.put('/local/:idEvent', eventController.putLocal);
eventRouter.put('/dates/:idEvent', eventController.putDate);
eventRouter.put('/name/:idEvent', eventController.putName);

/** On exporte le router */
module.exports = eventRouter;