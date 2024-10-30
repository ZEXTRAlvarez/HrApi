const User = require('../models/userModel');

const findByEmail = (email) => User.findOne({ email });
const createUser = (userData) => User.create(userData);
const searchUsers = (filter) => User.find(filter);


module.exports = { findByEmail, createUser, searchUsers };
