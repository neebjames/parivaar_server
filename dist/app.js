'use strict';

var _httpErrors = require('http-errors');

var _httpErrors2 = _interopRequireDefault(_httpErrors);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _cookieParser = require('cookie-parser');

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _parivaarAPI = require('./routes/parivaarAPI');

var _parivaarAPI2 = _interopRequireDefault(_parivaarAPI);

var _index = require('./database/models/index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();

app.use((0, _morgan2.default)('dev'));
app.use(_express2.default.json());
app.use(_express2.default.urlencoded({ extended: false }));
app.use((0, _cookieParser2.default)());
//app.use(express.static(path.join(__dirname, 'public')));
app.use((0, _cors2.default)());
app.get('/', function (req, res) {
  res.status(200).json({ message: 'Welcome to Node.js & Express' });
});
app.use('/', _parivaarAPI2.default);
// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next((0, _httpErrors2.default)(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  //res.render('error');
});

_index2.default.sequelize.sync().then(function () {
  app.listen(process.env.PORT || 4000, function () {
    return console.log('Server is listening now');
  });
});
//module.exports = app;