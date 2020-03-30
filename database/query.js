import pool from './database';

export const getFamilyDetail = async () => {
 return await pool.query('SELECT name from family_detail')
}
