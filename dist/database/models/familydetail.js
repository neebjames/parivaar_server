'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var familyDetail = function familyDetail(sequelize, DataTypes) {
  var FamilyDetail = sequelize.define('FamilyDetail', {
    name: DataTypes.STRING,
    color: DataTypes.STRING
  }, {});
  FamilyDetail.associate = function (models) {
    // associations can be defined here
  };
  return FamilyDetail;
};

exports.default = familyDetail;