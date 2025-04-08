import { Router } from 'express';
const router = Router();

import jwtAuth from '../Middleware/JWTAuth.js';
import { create, update, getAll, getById } from '../Controllers/CarController.js';
import { uploadFiles } from '../Services/GeneralServices.js';

router.post('/add', jwtAuth, uploadFiles, create);
router.put('/update/:id', jwtAuth, uploadFiles, update);
router.get('/all', jwtAuth, getAll);
router.get('/:id', jwtAuth, getById);

export default router;