
const express = require('express');
const router = express.Router();

router.post('/signup', async (req, res) => {
  const { name, address, mobile, username, password } = req.body;
  res.json({ message: 'Officer signed up successfully!' });
});

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  res.json({ subscribed: true });
});

module.exports = router;
