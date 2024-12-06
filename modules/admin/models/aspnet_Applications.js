const { DataTypes } = require("sequelize");
const sequelize = require("../../../configuration/dbConfig");

const AspnetApplications = sequelize.define(
  "AspnetApplications",
  {
    ApplicationName: {
      type: DataTypes.STRING(256),
      allowNull: false,
      unique: true,
    },
    LoweredApplicationName: {
      type: DataTypes.STRING(256),
      allowNull: false,
      unique: true,
    },
    ApplicationId: {
      type: DataTypes.UUID,
      primaryKey: true,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4, // Default to a new UUID
    },
    Description: {
      type: DataTypes.STRING(256),
      allowNull: true,
    },
  },
  {
    tableName: "aspnet_Applications",
    timestamps: false, // Table doesn't include createdAt or updatedAt fields
  }
);

// Define associations (if needed)
AspnetApplications.associate = (models) => {
  // Add associations if necessary
};

module.exports = AspnetApplications;
