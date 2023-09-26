const { Flight, Hotel, Restaurant, Car, Activity, User } = require('../Models/model');


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
    const allFlights = await Flight.find();
    const allHotels = await Hotel.find();
    const allRestaurants = await Restaurant.find();
    const allCars = await Car.find();
    const allActivities = await Activity.find();
    
    const allReservations = [].concat(allFlights, allHotels, allRestaurants, allCars, allActivities);
    res.json(allReservations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getReservationsByType = async (req, res) => {
  try {
    const Resy = getResy(req.params.type);
    const reservations = await Resy.find();
    if (!reservations || reservations.length === 0) {
      res.status(200).json({ message: 'No reservations found for this type', data: [] });
    } else {
      res.json({ data: reservations });
    }
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

const register = async (req, res) => {
  try {
      const { username, password } = req.body;
      const newUser = new User({ username, password });
      await newUser.save();

      res.status(201).send({ success: true, message: "User registered" });
  } catch (err) {
      res.status(500).send({ success: false, message: err.message });
  }
};

const login = async (req, res) => {
  try {
      const { username, password } = req.body;
      const user = await User.findOne({ username });

      if (!user || !(await user.comparePassword(password))) {
          return res.status(401).send({ success: false, message: "Incorrect username or password" });
      }

      const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.send({ success: true, token });
  } catch (err) {
      res.status(500).send({ success: false, message: err.message });
  }
}




module.exports = {
    getAllReservations,
    getReservationsByType,
    getReservationDetails,
    addReservation,
    updateReservation,
    deleteReservation,
    register,
    login
};

