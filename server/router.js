const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('./Models/model');

const {
  getAllReservations,
  getReservationDetails,
  addReservation,
  updateReservation,
  deleteReservation,
  register,
  login
} = require('./Controllers/controller');

router.get('/itinerary', getAllReservations);

router.get('/reservation/:type/:id', getReservationDetails);

router.post('/addReservation/:type', addReservation);

router.put('/reservation/:type/:id', updateReservation);

router.delete('/reservation/:type/:id', deleteReservation);

router.post('/register', register);

router.post('/login', login);

module.exports = router;

