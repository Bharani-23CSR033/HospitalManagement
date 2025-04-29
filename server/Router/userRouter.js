const express = require('express');
const router = express.Router();
const userController = require('../Controllers/userController');

router.post('/signUpUser', userController.createUser);
router.post('/loginUser', userController.loginUser);
router.delete('/deleteUser/:id', userController.deleteUser);
router.get('/users',userController.getAllUsers);

module.exports = router;
