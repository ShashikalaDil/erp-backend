const express = require("express");
const { getAllEmployees } = require("../controllers/hrController");

const router = express.Router();

router.get("/employees", getAllEmployees);

module.exports = router;
