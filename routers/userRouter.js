// router/userRouter.js
const express = require('express');
const router = express.Router();
const { getUsers,
    addUser,
    deleteUser,
    getUser,
    patchUser } = require('../controllers/userController');

// Define routes
router.get('/users', getUsers); // Route for fetching all cars
router.post('/users', addUser); // Route for adding a new car
router.delete('/users/:id', deleteUser); // Route for deleting a phonebook
router.get('/users/:id', getUser); // Route for fetching a specific phonebook by ID
router.patch('/users/:id', patchUser); // Route for updating a specific phonebook by ID

module.exports = router;
