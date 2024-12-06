const ADM_Module = require("../models/ADM_Module");
const ADM_Process = require("../models/ADM_Process");
const ADM_ProcessGroups = require("../models/ADM_ProcessGroups"); // Adjust the path to your models

// Get all modules
const getAllModules = async (req, res) => {
  try {
    const modules = await ADM_Module.findAll();
    res.status(200).json(modules);
    console.log(modules);
  } catch (error) {
    console.error("Error fetching module data:", error);
    res.status(500).json({ error: "Failed to fetch module data" });
  }
};

const getModuleById = async (req, res) => {
  try {
    const moduleId = req.params.id; // Get the 'id' from the request parameters
    const module = await ADM_Module.findOne({
      where: { ModuleId: moduleId }, // Filter the module by 'id'
    });

    if (!module) {
      return res.status(404).json({ error: "Module not found" });
    }

    res.status(200).json(module);
    console.log(module); // Log the module data for debugging
  } catch (error) {
    console.error("Error fetching module data:", error);
    res.status(500).json({ error: "Failed to fetch module data" });
  }
};

const getAllProcess = async (req, res) => {
  try {
    const process = await ADM_Process.findAll();
    res.status(200).json(process);
    console.log(process);
  } catch (error) {
    console.error("Error fetching module data:", error);
    res.status(500).json({ error: "Failed to fetch module data" });
  }
};

const getModuleWithProcessGroups = async (req, res) => {
  const moduleId = req.params.id;

  try {
    const module = await ADM_Module.findOne({
      where: { ModuleId: moduleId },
      include: [
        {
          model: ADM_ProcessGroups,
          as: 'processGroups', // Alias used in the association
        },
      ],
    });

    if (!module) {
      return res.status(404).json({ error: 'Module not found' });
    }

    res.status(200).json(module);
  } catch (error) {
    console.error("Error fetching module and process groups:", error);
    res.status(500).json({ error: "Failed to fetch module and process groups" });
  }
};

// Export controller functions
module.exports = {
  getAllModules,
  getAllProcess,
  getModuleById,
  getModuleWithProcessGroups,
};
