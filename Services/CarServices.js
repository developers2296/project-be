const mongoose = require('mongoose');
const Car = require('../Models/Car.js');
const GeneralServices = require('./GeneralServices');

exports.store = async (req) => {
  const {
    model,
    price,
    phone,
    city,
    fileName,
  } = req.body;
  const { userId } = req.user;

  let fields = {
    _id: GeneralServices.generateObjectId(),
    model,
    price,
    phone,
    city,
    fileName,
    userId,
  };
  let carDetail = await new Car(fields).save();
  return carDetail;
};

exports.getAll = async (req) => {
  const { userId } = req.user;
  let cars = await Car.find({ userId });
  return cars;
};

exports.getById = async (req) => {
  const { id } = req.params;
  const { userId } = req.user;
  let car = await Car.findOne({ _id: id, userId });
  return car;
};

exports.update = async (req) => {
  const {
    id,
    model,
    price,
    phone,
    city,
    fileName,
  } = req.body;
  const { userId } = req.user;

  let fields = {
    id,
    model,
    price,
    phone,
    city,
    fileName,
    userId,
  };
  let carDetail = await Car.findOneAndUpdate({ _id: id, userId }, fields, { new: true });
  return carDetail;
};