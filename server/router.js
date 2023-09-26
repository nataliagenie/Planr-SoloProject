const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const User = require('./Models/model');
// const { authenticateJWT } = require('./middleware')

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

router.get('/itinerary', getAllReservations);

// router.get('/reservation/:type/:id', authenticateJWT, getReservationDetails);

// router.post('/addReservation/:type', authenticateJWT, addReservation);

// router.put('/reservation/:type/:id', authenticateJWT, updateReservation);

// router.delete('/reservation/:type/:id', authenticateJWT, deleteReservation);

router.post('/register', register);

router.post('/login', login);

module.exports = router;


