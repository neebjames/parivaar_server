import express from 'express';
import {getFamilyDetail} from './../database/query';
const router = express.Router();

router.get('/familydetails', function(request, response) {
    getFamilyDetail()
    .then(familyDetail => {
        if(familyDetail)
        {
            console.log(familyDetail)
            response.status(200).json(familyDetail[0]);
            //response.send(familyDetail[0].name);
        }
    })
    .catch(err => console.error('Error executing query', err.stack))
    
});

export default router;
