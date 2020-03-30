import sequelize from './database.js';

export const getFamilyDetail = async () => {
 return await sequelize.query('SELECT name from family_detail')
}
