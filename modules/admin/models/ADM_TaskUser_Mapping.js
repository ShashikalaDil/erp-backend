const { DataTypes } = require("sequelize");
const sequelize = require("../../../configuration/dbConfig");

const ADM_TaskUser_Mapping = sequelize.define(
  "ADM_TaskUser_Mapping",
  {
    Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    TaskId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ProcessId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    GroupId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    ModuleId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    EmpId: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    CreatedBy: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    CreatedDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "ADM_TaskUser_Mapping",
    timestamps: false, // Table doesn't include createdAt or updatedAt fields
  }
);

// Define associations (if necessary)
ADM_TaskUser_Mapping.associate = (models) => {
  // Foreign key relationships
  ADM_TaskUser_Mapping.belongsTo(models.ADM_Module, {
    foreignKey: "ModuleId",
    targetKey: "ModuleId",
    as: "module",
  });

  ADM_TaskUser_Mapping.belongsTo(models.ADM_Process, {
    foreignKey: "ProcessId",
    targetKey: "ProcessId",
    as: "process",
  });

  ADM_TaskUser_Mapping.belongsTo(models.ADM_TaskList, {
    foreignKey: "TaskId",
    targetKey: "TaskId",
    as: "task",
  });

  // Optionally, you can also define an association with an Employee model if needed
  // ADM_TaskUser_Mapping.belongsTo(models.Employee, {
  //   foreignKey: "EmpId",
  //   targetKey: "EmpId",
  //   as: "employee",
  // });
};

module.exports = ADM_TaskUser_Mapping;
