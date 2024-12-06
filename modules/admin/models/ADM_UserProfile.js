const { DataTypes } = require("sequelize");
const sequelize = require("../../../configuration/dbConfig");

const ADM_UserProfile = sequelize.define(
  "ADM_UserProfile",
  {
    Id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    EmpNo: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    Name: {
      type: DataTypes.STRING(250),
      allowNull: true,
    },
    UserType: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    Password: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    Contact: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    Email: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    SecurityQuestion: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
    Answer: {
      type: DataTypes.STRING(50),
      allowNull: true,
    },
  },
  {
    tableName: "ADM_UserProfile",
    timestamps: false, // Table doesn't include createdAt or updatedAt fields
  }
);

// Define associations (if needed)
ADM_UserProfile.associate = (models) => {
  // Add any necessary relationships, if applicable
  // Example: ADM_UserProfile.belongsTo(models.Employee, {
  //   foreignKey: "EmpNo",
  //   targetKey: "EmpNo",
  //   as: "employee",
  // });
};

module.exports = ADM_UserProfile;
