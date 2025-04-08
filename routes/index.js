// project-be/routes/index.js
import { Router } from 'express';
import authRoutes from './Auth.js';
import carRoutes from './Car.js';
import userRoutes from './User.js';
import paymentRoutes from './Payment.js';
const router = Router();

router.use('/auth', authRoutes);
router.use('/cars', carRoutes);
router.use('/users', userRoutes);
router.use('/payments', paymentRoutes);

export default router;