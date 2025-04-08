// Express Router
import { Router } from 'express';
const router = Router();

// Controllers
import { login } from '../Controllers/AuthController.js';

// Routes
router.post('/login', login);
export default router;
