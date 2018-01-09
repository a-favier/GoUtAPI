/** On importe les librairies **/
const express = require('express');

/** On importe les controllers **/
const paimentController = require('../controllers/paimentController');

/** On déclare notre router **/
const paimentRouter = express.Router();

/** On importe les middlewares **/
const authMiddleware = require('../middlewares/authMiddleware');
const myProfilMiddleware = require('../middlewares/myProfilMiddleware');

/** On déclare les routes **/
paimentRouter.get('/:idParticipation', paimentController.getPaiment);
paimentRouter.post('/:pseudo', [authMiddleware, myProfilMiddleware, paimentController.postPaiment]);



/** On exporte le router **/
module.exports = paimentRouter;