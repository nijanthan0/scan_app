const User = require('../models/users');
const bcrypt = require('bcrypt');
const { generateAccessToken } = require('../utils/jwt');

// Register a new user
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existingUser = await User.findOne({ where: { email } });

    if (existingUser) return res.status(400).json({ message: 'User already exists.' });

    const newUser = await User.create({ name, email, password });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Login user
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid email or password.' });
    }
    console.log(user)
    const token = generateAccessToken(user);
    res.json({ token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { registerUser, loginUser };
