const express = require('express');
const router = express.Router();

const jwtAuth = require('../Middleware/JWTAuth');
const UserController = require('../Controllers/UserController');

router.get('/profile', jwtAuth, UserController.getProfile);
router.put('/update', jwtAuth, UserController.updateProfile);

module.exports = router;