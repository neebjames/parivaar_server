import {sequelize} from './database';

export const getFamilyDetail = async () => {
    return await sequelize.query('SELECT name FROM public."FamilyDetails"', { type: sequelize.QueryTypes.SELECT})
}
