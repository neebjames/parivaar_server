import sequelize from './database.js';

export default getFamilyDetail = async () => {
 return await sequelize.query('SELECT name from family_detail')
}
