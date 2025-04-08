// project-be/routes/Payment.js
import { Router } from 'express';
import{ createPaymentIntent }  from '../Controllers/PaymentController.js';
// const { createPaymentIntent } = default;
const router = Router();

router.post('/create-payment-intent', createPaymentIntent);

export default router;