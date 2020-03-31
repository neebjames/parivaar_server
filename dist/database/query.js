'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getFamilyDetail = undefined;

var _database = require('./database');

var _database2 = _interopRequireDefault(_database);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getFamilyDetail = exports.getFamilyDetail = async function getFamilyDetail() {
    return await _database2.default.query('SELECT name FROM public."FamilyDetails"', { type: _database2.default.QueryTypes.SELECT });
};