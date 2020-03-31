import Sequelize from 'sequelize';
import dotenv from 'dotenv'
dotenv.config()

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

export default sequelize;


// import {Pool} from 'pg'

