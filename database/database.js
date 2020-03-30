import Sequelize from 'sequelize';

const sequelize = new Sequelize('parivaar_db', 'postgres', 'root', {
  host: 'localhost',
  dialect: 'postgres',
  operatorsAliases: false,
  port: 5432,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});

export default sequelize;


// import {Pool} from 'pg'

