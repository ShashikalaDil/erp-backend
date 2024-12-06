const jwt = require('jsonwebtoken');
const config = require('config'); // Load the config for the secret key

const authenticate = (req, res, next) => {
  const token = req.header('x-auth-token');
  if (!token) return res.status(401).json({ message: 'Access denied. No token provided.' });

  try {
    const decoded = jwt.verify(token, config.get('JwtConfig.Key'));
    req.user = decoded; // Attach user data from token to the request object
    next();
  } catch (error) {
    res.status(400).json({ message: 'Invalid token.' });
  }
};

module.exports = authenticate;
