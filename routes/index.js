const express = require('express');
const router = express.Router();

const authRoutes = require('./Auth');
const carRoutes = require('./Car');

router.get('/', (req, res) => {
  res.send('Welcome to the API');
});

router.use('/api/auth', authRoutes);
router.use('/api/car', carRoutes);

module.exports = router;