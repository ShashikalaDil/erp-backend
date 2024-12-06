const DataTypes = require("sequelize").DataTypes;
const AspnetUsersModel = require("../modules/admin/models/aspnet_Users");
const AspnetMembershipModel = require("../modules/admin/models/aspnet_Membership");

function initModels(sequelize) {
  const AspnetUsers = AspnetUsersModel(sequelize, DataTypes);
  const AspnetMembership = AspnetMembershipModel(sequelize, DataTypes);

  // Define relationships
  AspnetUsers.hasOne(AspnetMembership, {
    foreignKey: "UserId",
    sourceKey: "UserId",
    as: "membership", // Alias for association
    onDelete: "CASCADE",
  });

  AspnetMembership.belongsTo(AspnetUsers, {
    foreignKey: "UserId",
    targetKey: "UserId",
  });

  return {
    AspnetUsers,
    AspnetMembership,
  };
}

module.exports = initModels;
