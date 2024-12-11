const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const carSchema = Schema(
  {
    _id: mongoose.Schema.Types.ObjectId,
    model: { type: String, required: true },
    price: { type: String, required: true },
    phone: { type: String, required: true },
    city: { type: String, required: false },
    fileName: { type: Array, required: false },
    userId: mongoose.Schema.Types.ObjectId,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Cars', carSchema);