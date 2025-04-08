import { Router } from 'express';
const router = Router();

import jwtAuth from '../Middleware/JWTAuth.js';
import { getProfileData, updateProfile } from '../Controllers/UserController.js';

router.get('/profile', jwtAuth, getProfileData);
router.put('/update', jwtAuth, updateProfile);

export default router;