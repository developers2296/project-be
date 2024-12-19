const fs = require('fs');
const path = require('path');
const CarServices = require('../Services/CarServices');
const Response = require('../Services/Response');
const GeneralServices = require('../Services/GeneralServices');

exports.store = async (req, res) => {
  const Validations = {
    model: 'Car Model field is required.',
    price: 'Car price field is required.',
    phone: 'Mobile Number Required',
    city: 'City Required',
  };

  const validation = GeneralServices.validateFields(req.body, Validations);
  if (!validation.isValid) {
    return Response.sendError(res, validation.message, [], 422);
  }
  
  if (!req.files.length){
    return Response.sendError(res, 'Attachment file required.', [], 422);
  }

  req.body.fileName = req.files.map(file => file.path);

  const result = await CarServices.store(req);

  return Response.sendResponse(res, 'Car created successfully.', result);
};

exports.update = async (req, res) => {
  const Validations = {
    model: 'Car Model field is required.',
    price: 'Car price field is required.',
    phone: 'Mobile Number Required',
    city: 'City Required',
  };

  const validation = GeneralServices.validateFields(req.body, Validations);
  if (!validation.isValid) {
    return Response.sendError(res, validation.message, [], 422);
  }

  if (req.files.length) {
    req.body.fileName = req.files.map(file => file.path);
  }

  const result = await CarServices.update(req);

  return Response.sendResponse(res, 'Car updated successfully.', result);
};

exports.getAll = async (req, res) => {
  const result = await CarServices.getAll(req);
  return Response.sendResponse(res, 'Cars retrieved successfully.', result);
};

exports.getById = async (req, res) => {
  const result = await CarServices.getById(req);
  return Response.sendResponse(res, 'Car retrieved successfully.', result);
};