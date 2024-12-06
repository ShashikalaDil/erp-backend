const { Sequelize } = require("sequelize");
const dbConfig = require("../../../configuration/dbConfig");

const sequelize = new Sequelize(dbConfig);

const aspnet_Users = require("./aspnet_Users")(sequelize);
const aspnet_Membership = require("./aspnet_Membership")(sequelize);
const ADM_Module = require("./ADM_Module")(sequelize, Sequelize.DataTypes);
const ADM_ProcessGroups = require("./ADM_ProcessGroups")(
  sequelize,
  Sequelize.DataTypes
);

// Associations
aspnet_Users.hasOne(aspnet_Membership, { foreignKey: "UserId" });
aspnet_Membership.belongsTo(aspnet_Users, { foreignKey: "UserId" });

ADM_Module.hasMany(ADM_ProcessGroups, {
  foreignKey: "ModuleId",
  as: "processGroups",
});

ADM_ProcessGroups.belongsTo(ADM_Module, {
  foreignKey: "ModuleId",
  targetKey: "ModuleId",
  as: "module", // Alias for the related module
});

module.exports = {
  sequelize,
  aspnet_Users,
  aspnet_Membership,
  ADM_Module,
  ADM_ProcessGroups,
};
