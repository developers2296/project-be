import mongoose from 'mongoose';
import Car from '../Models/Car.js';
import { generateObjectId } from './GeneralServices.js';

export async function store(req) {
  const {
    model,
    price,
    phone,
    city,
    fileName,
  } = req.body;
  const { userId } = req.user;

  let fields = {
    _id: generateObjectId(),
    model,
    price,
    phone,
    city,
    fileName,
    userId,
  };
  let carDetail = await new Car(fields).save();
  return carDetail;
}

export async function getAllData(req) {
  const { userId } = req.user;
  let cars = await Car.find({ userId });
  return cars;
}

export async function getCarById(req) {
  const { id } = req.params;
  const { userId } = req.user;
  let car = await Car.findOne({ _id: id, userId });
  return car;
}

export async function updateCar(req) {
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
}