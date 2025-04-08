import fs from 'fs';
import path from 'path';
import { store, updateCar, getAllData, getCarById } from '../Services/CarServices.js';
import { sendError, sendResponse } from '../Services/Response.js';
import { validateFields } from '../Services/GeneralServices.js';

export async function create(req, res) {
  const Validations = {
    model: 'Car Model field is required.',
    price: 'Car price field is required.',
    phone: 'Mobile Number Required',
    city: 'City Required',
  };

  const validation = validateFields(req.body, Validations);
  if (!validation.isValid) {
    return sendError(res, validation.message, [], 422);
  }
  
  if (!req.files.length){
    return sendError(res, 'Attachment file required.', [], 422);
  }

  req.body.fileName = req.files.map(file => file.path);

  const result = await store(req);

  return sendResponse(res, 'Car created successfully.', result);
}

export async function update(req, res) {
  const Validations = {
    model: 'Car Model field is required.',
    price: 'Car price field is required.',
    phone: 'Mobile Number Required',
    city: 'City Required',
  };

  const validation = validateFields(req.body, Validations);
  if (!validation.isValid) {
    return sendError(res, validation.message, [], 422);
  }

  if (req.files.length) {
    req.body.fileName = req.files.map(file => file.path);
  }

  const result = await updateCar(req);

  return sendResponse(res, 'Car updated successfully.', result);
}

export async function getAll(req, res) {
  const result = await getAllData(req);
  return sendResponse(res, 'Cars retrieved successfully.', result);
}

export async function getById(req, res) {
  const result = await getCarById(req);
  return sendResponse(res, 'Car retrieved successfully.', result);
}