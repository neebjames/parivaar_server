var pool = require('./database')

const getFamilyDetail = async () => {
 return await pool.query('SELECT name from family_detail')
}

module.exports = {getFamilyDetail}