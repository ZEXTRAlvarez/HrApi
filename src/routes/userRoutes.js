const express = require('express');
const { check } = require('express-validator');
const { registerUser, loginUser, searchUsers, deleteUser } = require('../controllers/userController');
const { verifyToken, isAdmin } = require('../middleware/auth');

const router = express.Router();

// Registro de usuario
router.post('/register', 
   [
      check('email', 'Please include a valid email').isEmail(),
      check('password', 'Please enter a password with 6 or more characters').isLength({ min: 6 })
   ],
   registerUser 
);

// Login
router.post('/login', 
   [
      check('email', 'Please include a valid email').isEmail(),
      check('password', 'Password is required').exists()
   ],
   loginUser 
);
//Ejemplos:
///api/users/search?skills=JavaScript,Python
///api/users/search?yearsOfExperience=5
///api/users/search?age=30
router.get('/search', verifyToken, searchUsers);

router.delete('/:id', verifyToken, isAdmin, deleteUser);

module.exports = router;
