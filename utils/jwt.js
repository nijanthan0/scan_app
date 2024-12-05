const jwt = require('jsonwebtoken');

const generateAccessToken = (user) => {
  return jwt.sign({ id: user.id, email: user.email , secretOrPrivateKey: user.password}, process.env.JWT_SECRET, { expiresIn: '1h' });
};

module.exports = { generateAccessToken };
