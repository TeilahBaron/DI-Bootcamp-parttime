// routes/sampleRoutes.js

const express = require('express');
const router = express.Router();
const sampleController = require('../controllers/sampleController');
const rbacMiddleware = require('../middleware/rbacMiddleware');

router.get('/public', sampleController.publicEndpoint);
router.get('/user-profile', rbacMiddleware.checkRole, sampleController.userProfile);
router.get('/admin-panel', rbacMiddleware.checkRole, (req, res, next) => {
  if (req.user.role !== 'admin') {
    return res.status(403).send('Unauthorized');
  }
  next();
}, sampleController.adminPanel);

module.exports = router;
