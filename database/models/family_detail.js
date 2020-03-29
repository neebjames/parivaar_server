'use strict';
module.exports = (sequelize, DataTypes) => {
  const family_detail = sequelize.define('family_detail', {
    name: DataTypes.STRING
  }, {});
  family_detail.associate = function(models) {
    // associations can be defined here
  };
  return family_detail;
};