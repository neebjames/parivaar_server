'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _query = require('./../database/query.js');

var _query2 = _interopRequireDefault(_query);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.get('/familydetails', function (request, response) {
    (0, _query2.default)().then(function (familyDetail) {
        if (familyDetail) {
            console.log(familyDetail);
            response.status(200).json(familyDetail[0]);
            //response.send(familyDetail[0].name);
        }
    }).catch(function (err) {
        return console.error('Error executing query', err.stack);
    });
});

exports.default = router;