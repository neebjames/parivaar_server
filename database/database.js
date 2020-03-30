import Sequelize from 'sequelize';
export const sequelize = new Sequelize('parivaar_db', 'postgres', 'root', {
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


// import {Pool} from 'pg'

// export const pool = new Pool({
//   user: 'postgres',
//   host: 'localhost',
//   database: 'parivaar_db',
//   password: 'root',
//   port: 5432,
//   max: 20,
//   idleTimeoutMillis: 30000,
//   connectionTimeoutMillis: 2000,
// })
