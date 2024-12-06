const { DataTypes } = require('sequelize');
const sequelize = require('../../../configuration/dbConfig');

module.exports = (sequelize, DataTypes) => {
  const ADM_Module = sequelize.define(
    'ADM_Module',
    {
  ModuleId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  ModuleCode: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  ModuleName: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  WelcomeMessage: {
    type: DataTypes.STRING(50),
    allowNull: true,
  },
  Description: {
    type: DataTypes.STRING(250),
    allowNull: true,
  },
  ModuleImage: {
    type: DataTypes.STRING(500),
    allowNull: true,
  },
  PageLink: {
    type: DataTypes.STRING(500),
    allowNull: true,
  },
  OrderById: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  tableName: 'ADM_Module',
  timestamps: false,
});

return ADM_Module;
};





// const { DataTypes } = require("sequelize");
// const sequelize = require("../../../configuration/dbConfig");

// const ADM_Module = sequelize.define(
//   "ADM_Module",
//   {
//     ModuleId: {
//       type: DataTypes.INTEGER,
//       primaryKey: true,
//       autoIncrement: true,
//       allowNull: false,
//     },
//     ModuleCode: {
//       type: DataTypes.STRING(50),
//       allowNull: true,
//     },
//     ModuleName: {
//       type: DataTypes.STRING(50),
//       allowNull: false,
//     },
//     WelcomeMessage: {
//       type: DataTypes.STRING(50),
//       allowNull: true,
//     },
//     Description: {
//       type: DataTypes.STRING(250),
//       allowNull: true,
//     },
//     ModuleImage: {
//       type: DataTypes.STRING(500),
//       allowNull: true,
//     },
//     PageLink: {
//       type: DataTypes.STRING(500),
//       allowNull: true,
//     },
//     OrderById: {
//       type: DataTypes.INTEGER,
//       allowNull: true,
//     },
//   },
//   {
//     tableName: "ADM_Module",
//     timestamps: false,
//   }
// );
// ADM_Module.associate = (models) => {
//   ADM_Module.hasMany(ADM_ProcessGroups, {
//     foreignKey: "ModuleId",
//     as: "processGroups",  
//   });
// };
// module.exports = ADM_Module;
