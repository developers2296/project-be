import { existsSync, mkdirSync } from 'fs';
import path from 'path';
import multer, { diskStorage } from 'multer';

const storage = diskStorage({
  destination: (req, file, cb) => {
    const uploadDir = 'uploads/';
    if (!existsSync(uploadDir)) {
      mkdirSync(uploadDir, { recursive: true });
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

export const uploadFiles = upload.array('attachments', 10);

export function validateFields(fields, validations) {
  for (const [key, value] of Object.entries(validations)) {
    if (!fields[key]) {
      return { isValid: false, message: value };
    }
  }
  return { isValid: true };
}

export function generateObjectId() {
  return new mongoose.Types.ObjectId();
}