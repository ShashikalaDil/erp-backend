const { DataTypes } = require("sequelize");
const sequelize = require("../../../configuration/dbConfig");

const ADM_ServerUser = sequelize.define(
  "ADM_ServerUser",
  {
    AdminId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    UserName: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true, // Ensures the UserName is unique
    },
    PasswordHash: {
      type: DataTypes.BLOB(64), // Using BLOB for varbinary data
      allowNull: false,
    },
    PasswordSalt: {
      type: DataTypes.BLOB(64), // Using BLOB for varbinary data
      allowNull: false,
    },
    Role: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: "Admin", // Default role is 'Admin'
    },
    CreatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    UpdatedAt: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    LastLogin: {
      type: DataTypes.DATE,
      allowNull: true,
    },
  },
  {
    tableName: "ADM_ServerUser",
    timestamps: false, // Since the table has CreatedAt and UpdatedAt, timestamps aren't automatically managed by Sequelize
  }
);

module.exports = ADM_ServerUser;
