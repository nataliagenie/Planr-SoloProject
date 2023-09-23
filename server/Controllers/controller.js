const { Flight, Hotel, Restaurant, Car, Activity } = require('../Models/model');

const getResy = (type) => {
  switch (type) {
    case 'flight':
      return Flight;
    case 'hotel':
      return Hotel;
    case 'restaurant':
      return Restaurant;
    case 'car':
      return Car;
    case 'activity':
      return Activity;
    default:
      throw new Error('Invalid reservation type');
  }
};

const getAllReservations = async (req, res) => {
  try {
    const Resy = getResy(req.params.type);
    const allReservations = await Resy.find();
    res.json(allReservations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getReservationDetails = async (req, res) => {
  try {
    const Resy = getResy(req.params.type);
    const reservation = await Resy.findById(req.params.id);
    if (!reservation) {
      res.status(404).json({ message: 'Reservation not found' });
    } else {
      res.json(reservation);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addReservation = async (req, res) => {
  try {
    const Resy = getResy(req.params.type);
    const newReservation = new Resy(req.body);
    await newReservation.save();
    res.status(201).json(newReservation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const updateReservation = async (req, res) => {
  try {
    const Resy = getResy(req.params.type);
    const updatedReservation = await Resy.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedReservation) {
      res.status(404).json({ message: 'Reservation not found' });
    } else {
      res.json(updatedReservation);
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteReservation = async (req, res) => {
  try {
    const Resy = getResy(req.params.type);
    const deletedReservation = await Resy.findByIdAndDelete(req.params.id);
    if (!deletedReservation) {
      res.status(404).json({ message: 'Reservation not found' });
    } else {
      res.json({ message: 'Reservation deleted successfully' });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllReservations,
  getReservationDetails,
  addReservation,
  updateReservation,
  deleteReservation
};
