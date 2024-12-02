const hrService = require("../services/hrService");

const getAllEmployees = async (req, res) => {
  try {
    const employees = await hrService.fetchEmployees();
    res.json(employees);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch employees" });
  }
};

module.exports = { getAllEmployees };
