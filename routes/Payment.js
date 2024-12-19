// project-be/routes/Payment.js
const express = require('express');
const { createPaymentIntent } = require('../Controllers/PaymentController');
const router = express.Router();

router.post('/create-payment-intent', createPaymentIntent);

module.exports = router;