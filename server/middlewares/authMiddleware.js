const jwt = require('jsonwebtoken');
const jwtConfig = require('../config/jwtConfig');

function authMiddleware(req, res, next) {
  const token = req.headers['x-authorization'];

  if (!token) {
    return res.status(401).json({ message: 'Missing auth token' });
  }

  try {
    const decoded = jwt.verify(token, jwtConfig.secret);
    req.user = decoded;
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
}

module.exports = authMiddleware;
