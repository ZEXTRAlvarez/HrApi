const userService = require('../services/userService');

const registerUser = async (req, res) => {
   try {
      const user = await userService.register(req.body);
      res.status(201).json(user);
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
};

const loginUser = async (req, res) => {
   try {
      const token = await userService.login(req.body);
      res.json({ token });
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
};

const searchUsers = async (req, res) => {
   try {
      const criteria = req.query; 
      const users = await userService.search(criteria);
      res.json(users);
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
};

const deleteUser = async (req, res) => {
   try {
      await userService.delete(req.params.id); 
      res.status(204).send();
   } catch (error) {
      res.status(400).json({ message: error.message });
   }
};

module.exports = { registerUser, loginUser, searchUsers, deleteUser };
