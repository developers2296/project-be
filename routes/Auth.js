// Express Router
const express = require('express');
const router = express.Router();

// Controllers
const AuthController = require('../Controllers/AuthController');

// Routes
router.post('/login', AuthController.login);
module.exports = router;
