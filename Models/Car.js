import { Schema as _Schema, model as _model } from 'mongoose';
const Schema = _Schema;

const carSchema = Schema(
  {
    _id: _Schema.Types.ObjectId,
    model: { type: String, required: true },
    price: { type: String, required: true },
    phone: { type: String, required: true },
    city: { type: String, required: false },
    fileName: { type: Array, required: false },
    userId: _Schema.Types.ObjectId,
  },
  { timestamps: true }
);

export default _model('Cars', carSchema);