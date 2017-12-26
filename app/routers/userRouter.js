/** On importe les librairies */
const express = require('express');

/** On importe les controllers */
const userController = require('../controllers/userController');

/** On déclare notre router */
const userRouter = express.Router();

/** On importe les middlewares */
const authMiddleware = require('../middlewares/authMiddleware');

/** On déclare les routes */
userRouter.get('/', userController.getUsers);
userRouter.get('/:pseudo', userController.getUser);
userRouter.post('/', userController.postUser);
userRouter.put('/:pseudo', [authMiddleware, userController.putUser]);

/** On exporte le router */
module.exports = userRouter;