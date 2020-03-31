import sequelize from './database.js';

const getFamilyDetail = async () => {
    
    return await sequelize.query('SELECT name FROM public."FamilyDetails"', { type: sequelize.QueryTypes.SELECT})
  
 //return await sequelize.query('SELECT name from family_detail')
}

export default getFamilyDetail;
