const Trip = require('../models/Trip');

const getAll = async (req, res) => {
  const trips = await Trip.find().sort({ kmOfSlopes: -1 });
  res.json(trips);
};

const getLatest = async (req, res) => {
  const trips = await Trip.find().sort({ kmOfSlopes: -1 }).limit(3);
  res.json(trips);
};

const getOne = async (req, res) => {
  const trip = await Trip.findById(req.params.id);
  if (!trip) return res.status(404).json({ message: 'Trip not found' });
  res.json(trip);
};

const create = async (req, res) => {
  const trip = await Trip.create({ ...req.body, _ownerId: req.user._id });
  res.status(201).json(trip);
};

const update = async (req, res) => {
  const trip = await Trip.findById(req.params.id);
  if (!trip) return res.status(404).json({ message: 'Trip not found' });
  if (trip._ownerId.toString() !== req.user._id) {
    return res.status(403).json({ message: 'Not authorized' });
  }

  Object.assign(trip, req.body);
  await trip.save();
  res.json(trip);
};

const remove = async (req, res) => {
  const trip = await Trip.findById(req.params.id);
  if (!trip) return res.status(404).json({ message: 'Trip not found' });
  if (trip._ownerId.toString() !== req.user._id) {
    return res.status(403).json({ message: 'Not authorized' });
  }

  await trip.deleteOne();
  res.status(204).end();
};

const search = async (req, res) => {
  const { resort } = req.query;
  const trips = await Trip.find({ resort });
  res.json(trips);
};

module.exports = {
  getAll,
  getLatest,
  getOne,
  create,
  update,
  remove,
  search,
};
