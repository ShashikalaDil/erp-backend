const express = require('express');
const adminRoutes = require('./routes/adminRoutes');  // Import the routes

const router = express.Router();

// Use the admin routes under the `/admin` prefix
router.use('/admin', adminRoutes);

module.exports = router;
