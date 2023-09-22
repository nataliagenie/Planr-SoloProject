const mongoose = require('mongoose');

// mongoose.connect('mongodb://127.0.0.1:27017/Events')
mongoose.connect('mongodb://127.0.0.1:27017')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));


const flightSchema = new mongoose.Schema({
  origin: {
    type: String,
    required: true,
  },
  destination: {
    type: Date,
    required: true,
  },
  confNumber: {
    type: String,
    required: true,
  },
  flightNum: {
    type: String,
    required: true,
  },
  dateTime: {
    type: String,
    required: true,
  }
});

const hotelSchema = new mongoose.Schema({
  confNumber: {
    type: String,
    required: true,
  },
  hotelName: {
    type: Date,
    required: true,
  },
  ciDateTime: {
    type: String,
    required: true,
  },
  coDateTime: {
    type: String,
    required: true,
  }
});

const restaurantSchema = new mongoose.Schema({
  restName: {
    type: String,
    required: true,
  },
  dateTime: {
    type: Date,
    required: true,
  },
  cuisine: {
    type: String,
    required: false,
  },
  dressCode: {
    type: String,
    required: false,
  }
});

const carSchema = new mongoose.Schema({
  confNumber: {
    type: String,
    required: true,
  },
  rentalCompany: {
    type: Date,
    required: true,
  },
  carType: {
    type: String,
    required: false,
  },
  pickupDate: {
    type: String,
    required: true,
  },
  dropoffDate: {
    type: String,
    required: true,
  }
});

const activitySchema = new mongoose.Schema({
  activity: {
    type: String,
    required: true,
  },
  dateTime: {
    type: Date,
    required: true,
  },
  dressCode: {
    type: String,
    required: false,
  }
});

const Flight = mongoose.model('Event', flightSchema);
const Hotel = mongoose.model('Event', hotelSchema);
const Restaurant = mongoose.model('Event', restaurantSchema);
const Car = mongoose.model('Event', carSchema);
const Activity = mongoose.model('Event', activitySchema);
module.exports = Event;
