const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
  resort: { type: String, required: true },
  country: { type: String, required: true },
  imageUrl: { type: String, required: true },
  altitude: { type: Number, required: true },
  kmOfSlopes: { type: Number, required: true },
  numberOfLifts: { type: Number, required: true },
  numberOfHotels: { type: Number, required: true },
  skiPassPrice: { type: Number, required: true },
  highestPeak: { type: String, required: true },
  skiMap: { type: String, required: true },
  description: { type: String, required: true },
  _ownerId: { type: mongoose.Types.ObjectId, ref: 'User', required: true },
}, { timestamps: true });

module.exports = mongoose.model('Trip', tripSchema);
