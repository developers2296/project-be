// project-be/routes/index.js
const express = require('express');
const authRoutes = require('./Auth');
const carRoutes = require('./Car');
const userRoutes = require('./User');
const paymentRoutes = require('./Payment');
const router = express.Router();

router.use('/auth', authRoutes);
router.use('/cars', carRoutes);
router.use('/users', userRoutes);
router.use('/payments', paymentRoutes);

module.exports = router;