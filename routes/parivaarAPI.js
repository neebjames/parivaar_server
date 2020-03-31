import express from 'express';
import {getFamilyDetail} from './../database/query';
const router = express.Router();

router.get('/familydetails', function(request, response) {
    getFamilyDetail()
    .then(familyDetails => {
        if(familyDetails && familyDetails.length > 0)
        {
            response.status(200).json(familyDetails[0]);
        }
    })
    .catch(err => console.error('Error executing query', err.stack))
    
});

export default router;
