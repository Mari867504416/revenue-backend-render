
const express = require('express');
const router = express.Router();

router.post('/admin/login', (req, res) => {
  const { username, password } = req.body;
  res.json({ message: 'Admin logged in' });
});

router.post('/admin/reset-password', (req, res) => {
  res.json({ message: 'Password reset' });
});

router.post('/submit-transaction', (req, res) => {
  res.json({ message: 'Transaction submitted' });
});

router.post('/admin/activate', (req, res) => {
  res.json({ message: 'User activated' });
});

router.get('/admin/officers', (req, res) => {
  res.json([
    { name: 'Ravi', address: 'Chennai', mobile: '9876543210', username: 'ravi123' }
  ]);
});

module.exports = router;
