const express = require('express');
const router = express.Router();
const { getEvents, addEvent, } = require('./controllers/EventController');

router.get('/events', getEvents);
router.post('/events', addEvent);

module.exports = router;
