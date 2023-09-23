const express = require('express');
const router = express.Router();

const {
  getAllReservations,
  getReservationDetails,
  addReservation,
  updateReservation,
  deleteReservation
} = require('./Controllers/controller');

router.get('/itinerary', getAllReservations);

router.get('/reservation/:type/:id', getReservationDetails);

router.post('/addReservation/:type', addReservation);

router.put('/reservation/:type/:id', updateReservation);

router.delete('/reservation/:type/:id', deleteReservation);

module.exports = router;
