/** On importe les librairies */
const express = require('express');

/** On importe les controllers */
const categorieController = require('../controllers/categorieController');

/** On déclare notre router */
const categorieRouter = express.Router();

/** On importe les middlewares */
const authMiddleware = require('../middlewares/authMiddleware');

/** On déclare les routes */
categorieRouter.get('/', categorieController.getCategories);
categorieRouter.get('/:id', categorieController.getCategorie);
categorieRouter.get('/event/:id', categorieController.getEventCategorie);
categorieRouter.post('/event/', categorieController.postCategorie);
categorieRouter.delete('/:id', categorieController.deleteCategorie);

/** On exporte le router */
module.exports = categorieRouter;