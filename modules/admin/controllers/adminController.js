const { ADM_Module } = require("../models/ADM_Module");

// Get all modules
const getAllModules = async (req, res) => {
  try {
    const modules = await ADM_Module.findAll(); // Fetch all modules
    res.status(200).json(modules);
    console.log(modules);
  } catch (error) {
    console.error("Error fetching module data:", error);
    res.status(500).json({ error: "Failed to fetch module data" });
  }
};

// Export controller functions
module.exports = {
  getAllModules,
};
