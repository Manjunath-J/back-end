import express from 'express';
import * as userController from '../controllers/user.controller';

const router = express.Router();


//route to create a new user
router.post('', userController.newUser);

//route to get a single user by their user id
router.post('/login', userController.login);

export default router;
