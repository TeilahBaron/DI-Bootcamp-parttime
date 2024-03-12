const express = require('express');
const router = express.Router();

// Define routes
router.get('/', (req, res) => {
  res.send('Homepage');
});

router.get('/about', (req, res) => {
  res.send('About Us Page');
});

// Export the router
module.exports = router;
