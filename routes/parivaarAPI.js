var express = require('express');
import { getFamilyDetail } from './../database/query'
const router = express.Router();

router.get('/familydetails', function(request, response) {
    getFamilyDetail()
    .then(res => {
        if(res.rows && res.rows.length > 0)
        {
            response.send(res.rows[0].name);
        }
    })
    .catch(err => console.error('Error executing query', err.stack))
    
});

module.exports = router;
