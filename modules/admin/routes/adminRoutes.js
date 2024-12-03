const express = require('express');
const router = express.Router();
const { getAllModules } = require('../controllers/adminController');

// Define routes
router.get('/allmodules', getAllModules); // Route to get all modules

module.exports = router;
