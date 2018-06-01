/** On importe les librairies **/
const express = require('express');

/** On importe les controllers **/
const userController = require('../controllers/userController');

/** On déclare notre router **/
const userRouter = express.Router();

/** On importe les middlewares **/
const authMiddleware = require('../middlewares/authMiddleware');
const myProfilMiddleware = require('../middlewares/myProfilMiddleware');

/** On déclare les routes **/
userRouter.get('/me/:pseudo', [authMiddleware, myProfilMiddleware, userController.getMe]);
userRouter.get('/user/:pseudo', userController.getUser);
userRouter.get('/like/:pseudo', userController.getUsersLikePseudo);
userRouter.get('/mail/:mail', userController.getUsersByMail);
userRouter.post('/', userController.postUser);
userRouter.put('/names/:pseudo', [authMiddleware, myProfilMiddleware, userController.putNames]);
userRouter.put('/mail/:pseudo', [authMiddleware, myProfilMiddleware, userController.putMail]);
userRouter.put('/born/:pseudo', [authMiddleware, myProfilMiddleware, userController.putBorn]);
userRouter.put('/tel/:pseudo', [authMiddleware, myProfilMiddleware, userController.putTel]);
userRouter.put('/password/:pseudo', [authMiddleware, myProfilMiddleware, userController.putPassword]);
userRouter.put('/resetPassword/:pseudo', [userController.resetPassword]);

/** On exporte le router **/
module.exports = userRouter;