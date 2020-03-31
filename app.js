import createError from 'http-errors';
import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import cors from 'cors';
import parivaarAPI from './routes/parivaarAPI';
import db from './database/models';
const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());
app.get('/', (req, res) => {
  res.status(200).json({ message: 'Welcome to Node.js & Express' });
});
app.use('/', parivaarAPI);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


db.sequelize.sync().then(function() {
  app.listen(process.env.PORT || 4000, () => console.log('Server is listening now'))
});
