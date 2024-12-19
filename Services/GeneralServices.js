const fs = require('fs');
const path = require('path');
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = 'uploads/';
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir, { recursive: true });
    }
    cb(null, uploadDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5 // 5 MB limit
  },
  fileFilter: (req, file, cb) => {
    // Accept only certain file types
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(new Error('Unsupported file type'), false);
    }
  }
});

exports.uploadFiles = upload.array('attachments', 10);

exports.validateFields = (fields, validations) => {
  for (const [key, value] of Object.entries(validations)) {
    if (!fields[key]) {
      return { isValid: false, message: value };
    }
  }
  return { isValid: true };
};

exports.generateObjectId = () => {
  return new mongoose.Types.ObjectId();
};