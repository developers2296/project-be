const express = require('express');
const router = express.Router();

const jwtAuth = require('../Middleware/JWTAuth');
const CarController = require('../Controllers/CarController');
const GeneralServices = require('../Services/GeneralServices');

router.post('/add', jwtAuth, GeneralServices.uploadFiles, CarController.store);
router.put('/update/:id', jwtAuth, GeneralServices.uploadFiles, CarController.update);
router.get('/all', jwtAuth, CarController.getAll);
router.get('/:id', jwtAuth, CarController.getById);

module.exports = router;