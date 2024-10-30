const userRepository = require('../repositories/userRepository');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (userData) => {
   const existingUser = await userRepository.findByEmail(userData.email);
   if (existingUser) throw new Error('Email already in use');

   const hashedPassword = await bcrypt.hash(userData.password, 10);
   const user = await userRepository.createUser({ ...userData, password: hashedPassword });
   return user;
};

const login = async ({ email, password }) => {
   const user = await userRepository.findByEmail(email);
   console.log(user);
   if (!user) throw new Error('Invalid credentials');

   const isMatch = await bcrypt.compare(password, user.password);
   if (!isMatch) throw new Error('Invalid credentials');

   const token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, process.env.JWT_SECRET, { expiresIn: '1h' });
   return token;
};

const search = async (criteria) => {
   const { skills, yearsOfExperience, age } = criteria;
   const filter = {};
   if (skills) filter.tecnologias = { $in: skills.split(',') }; 
   if (yearsOfExperience) filter.aniosExperiencia = { $gte: parseInt(yearsOfExperience) }; 
   if (age) filter.edad = { $gte: parseInt(age) }; 

   const users = await userRepository.searchUsers(filter);
   return users;
};

const deleteUser = async (userId) => {
   const result = await userRepository.deleteUserById(userId);
   if (!result) throw new Error('User not found');
   return result;
};

module.exports = { register, login, search, deleteUser };
