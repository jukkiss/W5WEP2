// controllers/carController.js
const User = require('../models/User');


// Function to fetch all users
const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Function to add a new user
const addUser = async (req, res) => {
  const { username, email, password, firstName, lastName, age } = req.body;
  try {
    const newUser = new Car({ username, email, password, firstName, lastName, age });
    await newUser.save();
    res.status(201).json(newCar);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
      const deletedUser = await User.findByIdAndDelete(id);
      if (!deletedUser) {
        return res.status(404).json({ error: 'USer not found' });
      }
      res.status(200).json({ message: 'USer deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Function to get a specific user by ID
  const getUser = async (req, res) => {
    const { id } = req.params;
    try {
      const user = await User.findById(id);
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  // Function to update a specific car by ID
  const patchUser = async (req, res) => {
    const { id } = req.params;
    try {
      const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
      if (!updatedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(updatedUser);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };
  
  
  module.exports = {
    getUsers,
    addUser,
    deleteUser,
    getUser,
    patchUser
  };