const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

mongoose.connect('mongodb://127.0.0.1:27017/planr')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

userSchema.pre('save', async function(next) {
  if (this.isModified('password') || this.isNew) {
      this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

userSchema.methods.comparePassword = async function(pass) {
  return bcrypt.compare(pass, this.password);
};


const flightSchema = new mongoose.Schema({
  origin: {
    type: String,
    required: true,
  },
  destination: {
    type: String,
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
    type: Date,
    required: true,
  }
});

const hotelSchema = new mongoose.Schema({
  hotelName: {
    type: String,
    required: true,
  },
  confNumber: {
    type: String,
    required: true,
  },
  ciDateTime: {
    type: Date,
    required: true,
  },
  coDateTime: {
    type: Date,
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
    type: String,
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

const Flight = mongoose.model('Flight', flightSchema);
const Hotel = mongoose.model('Hotel', hotelSchema);
const Restaurant = mongoose.model('Restaurant', restaurantSchema);
const Car = mongoose.model('Car', carSchema);
const Activity = mongoose.model('Activity', activitySchema);
const User = mongoose.model('User', userSchema);

module.exports = {
  Flight,
  Hotel,
  Restaurant,
  Car,
  Activity,
  User
};





