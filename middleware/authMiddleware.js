const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
  // Check for token in headers
  const token = req.header('Authorization');
  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, 'secretkey');
    req.userId = decoded.userId; // Attach userId to request object
    next(); // Call next middleware
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Unauthorized' });
  }
};

module.exports = authMiddleware;
