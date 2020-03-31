'use strict';
const familyDetail = (sequelize, DataTypes) => {
  const FamilyDetail = sequelize.define('FamilyDetail', {
    name: DataTypes.STRING
  }, {});
  FamilyDetail.associate = function(models) {
    // associations can be defined here
  };
  return FamilyDetail;
};

export default familyDetail