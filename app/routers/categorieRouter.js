/** On importe les librairies */
const express = require('express');

/** On importe les controllers */
const categorieController = require('../controllers/categorieController');

/** On déclare notre router */
const categorieRouter = express.Router();

/** On importe les middlewares */
const authMiddleware = require('../middlewares/authMiddleware');
const myEventMiddleware = require('../middlewares/myEventMiddleware');

/** On déclare les routes */
categorieRouter.get('/', categorieController.getCategories);
categorieRouter.get('/event/:idEvent', categorieController.getEventCategorie);
categorieRouter.post('/event/:idEvent', [authMiddleware, myEventMiddleware, categorieController.postCategorie]);
categorieRouter.delete('/event/:idEvent', [authMiddleware, myEventMiddleware, categorieController.deleteCategorie]);

/** On exporte le router */
module.exports = categorieRouter;