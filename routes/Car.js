const express = require('express');
const router = express.Router();
const multer = require('multer');

const jwtAuth = require('../Middleware/JWTAuth');
const CarController = require('../Controllers/CarController');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, process.env.CARS_DIR);
    },
    filename: (req, file, cb) => {
        const uniqueSuffix = Date.now();
        cb(null, `${uniqueSuffix}-${file.originalname}`);
    }
});
  
const upload = multer({ storage });

router.post('/add', jwtAuth, upload.array('attachments'), CarController.store);

module.exports = router;
