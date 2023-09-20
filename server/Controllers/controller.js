// const Event = require("../Models/model");


// exports.getEvents = async (req, res) => {
//   try {
//     const events = await Event.find({ date: { $gte: new Date() } }) 
//       .sort({ date: 1 }) 
//       .exec();
//     res.status(200).json(events);
//   } catch (error) {
//     console.error('Error getting events:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };


// exports.addEvent = async (req, res) => {
//   try {
//     if (!req.body.title || !req.body.dateTime || !req.body.venue) {
//       return res.status(400).json({ error: 'Missing required fields' });
//     }

//     const newEvent = new Event(req.body);
//     await newEvent.save();
//     res.status(201).json(newEvent);
//   } catch (error) {
//     console.error('Error adding an event:', error);
//     res.status(500).json({ error: 'Internal server error' });
//   }
// };


