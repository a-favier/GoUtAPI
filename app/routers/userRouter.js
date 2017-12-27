/** On importe les librairies */
const express = require('express');

/** On importe les controllers */
const userController = require('../controllers/userController');

/** On déclare notre router */
const userRouter = express.Router();

/** On importe les middlewares */
const authMiddleware = require('../middlewares/authMiddleware');

/** On déclare les routes */
userRouter.get('/me/:pseudo', userController.getMe);
userRouter.get('/:pseudo', userController.getUser);
userRouter.get('/like/:pseudo', userController.getUsersLikePseudo);
userRouter.post('/', userController.postUser);
userRouter.put('/names/:pseudo', userController.putNames);
userRouter.put('/mail/:pseudo', userController.putMail);
userRouter.put('/born/:pseudo', userController.putBorn);
userRouter.put('/tel/:pseudo', userController.putTel);
userRouter.put('/password/:pseudo', userController.putPassword);

/** On exporte le router */
module.exports = userRouter;