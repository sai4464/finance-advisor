const express = require('express');
const router = express.Router();

router.post('/register', (req, res) => {
  console.log('🔥 Register route hit');

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Missing email or password' });
  }

  res.status(200).json({
    message: 'Register route working',
    received: { email, password }
  });
});

module.exports = router;
