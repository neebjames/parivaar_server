import sequelize from './database';

const getFamilyDetail = async () => {
    return await sequelize.query('SELECT name FROM public."FamilyDetails"', { type: sequelize.QueryTypes.SELECT})
}

export default getFamilyDetail;
