/** On importe les librairies */
const express = require('express');

/** On importe les controllers */
const eventController = require('../controllers/eventController');

/** On déclare notre router */
const eventRouter = express.Router();

/** On importe les middlewares */
const authMiddleware = require('../middlewares/authMiddleware');
const myEventMiddleware = require('../middlewares/myEventMiddleware');
const myProfilMiddleware = require('../middlewares/myProfilMiddleware');

/** On déclare les routes */
eventRouter.get('/event/:idEvent', eventController.getEvent);
eventRouter.get('/user/:pseudo', eventController.getEventByUser);
eventRouter.get('/find', eventController.getFind);
eventRouter.post('/user/:pseudo', [authMiddleware, myProfilMiddleware, eventController.postEvent]);
eventRouter.put('/active/:idEvent', [authMiddleware, myEventMiddleware, eventController.putActive]);
eventRouter.put('/booking/:idEvent', [authMiddleware, myEventMiddleware, eventController.putBooking]);
eventRouter.put('/description/:idEvent', [authMiddleware, myEventMiddleware, eventController.putDescription]);
eventRouter.put('/local/:idEvent', [authMiddleware, myEventMiddleware, eventController.putLocal]);
eventRouter.put('/dates/:idEvent', [authMiddleware, myEventMiddleware, eventController.putDate]);
eventRouter.put('/name/:idEvent', [authMiddleware, myEventMiddleware, eventController.putName]);

/** On exporte le router */
module.exports = eventRouter;