const url = 'http://localhost:3060';

const ApiService = {
  
  fetchAllReservations: async () => {
    try {
      const response = await fetch(`${url}/itinerary`);
      if (!response.ok) throw new Error('Network response was not ok');
      return await response.json();
    } catch (error) {
      console.error("There was a problem fetching reservations:", error);
      throw error;
    }
  },

  fetchReservationDetails: async (type, id) => {
    try {
      const response = await fetch(`${url}/reservation/${type}/${id}`);
      if (!response.ok) throw new Error('Network response was not ok');
      return await response.json();
    } catch (error) {
      console.error("There was a problem fetching reservation details:", error);
      throw error;
    }
  },

  createReservation: async (type, data) => {
    try {
      const response = await fetch(`${url}/addReservation/${type}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Network response was not ok');
      return await response.json();
    } catch (error) {
      console.error("There was a problem creating the reservation:", error);
      throw error;
    }
  },

  updateReservation: async (type, id, data) => {
    try {
      const response = await fetch(`${url}/reservation/${type}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Network response was not ok');
      return await response.json();
    } catch (error) {
      console.error("There was a problem updating the reservation:", error);
      throw error;
    }
  },

  deleteReservation: async (type, id) => {
    try {
      const response = await fetch(`${url}/reservation/${type}/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Network response was not ok');
      return await response.json();
    } catch (error) {
      console.error("There was a problem deleting the reservation:", error);
      throw error;
    }
  },

  login: async (username, password) => {
    try {
      const response = await fetch(`${url}/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) throw new Error('Network response was not ok');
      return await response.json();
    } catch (error) {
      console.error("There was a problem logging in:", error);
      throw error;
    }
  },

  register: async (username, password) => {
    try {
      const response = await fetch(`${url}/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });
      if (!response.ok) throw new Error('Network response was not ok');
      return await response.json();
    } catch (error) {
      console.error("There was a problem registering:", error);
      throw error;
    }
  },
};



export default ApiService;
