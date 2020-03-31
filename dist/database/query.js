'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _database = require('./database.js');

var _database2 = _interopRequireDefault(_database);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getFamilyDetail = async function getFamilyDetail() {

    return await _database2.default.query('SELECT name FROM public."FamilyDetails"', { type: _database2.default.QueryTypes.SELECT });

    //return await sequelize.query('SELECT name from family_detail')
};

exports.default = getFamilyDetail;