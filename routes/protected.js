const express = require('express');
const authenticate = require('../middleware/authMiddleware');

const router = express.Router();

router.get('/dashboard', authenticate, (req, res) => {
  res.json({ message: `Welcome to your dashboard, User ID: ${req.user.userId}` });
});

module.exports = router;
