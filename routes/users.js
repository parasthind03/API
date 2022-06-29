const router = require('express').Router();
const User = require('../models/user');
const { protect } = require('../controllers/authController');
const userController = require('../controllers/userController');
const { login, register } = require('../controllers/authController');

// Add New User
router.post('/register', register);

// Login as a User
router.post('/login', login);

router.use(protect);

//Delete user
router.delete('/delete', userController.deleteUser);

module.exports = router;
