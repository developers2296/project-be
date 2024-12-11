const mongoose = require('mongoose');

const Car = require('../Models/Car.js');

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
    _id: new mongoose.Types.ObjectId(),
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