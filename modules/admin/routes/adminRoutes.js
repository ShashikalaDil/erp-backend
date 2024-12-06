const express = require("express");
const router = express.Router();
const {
  getAllModules,
  getAllProcess,
  getModuleById,
  getModuleWithProcessGroups,
} = require("../controllers/adminController");

// Define routes
router.get("/allmodules", getAllModules);
router.get("/allprocess", getAllProcess);
router.get("/module/:id", getModuleById);
router.get("/module/:id/process-groups", getModuleWithProcessGroups);


module.exports = router;
