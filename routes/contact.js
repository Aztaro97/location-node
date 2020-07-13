let express = require('express');
let router = express.Router();

router.get('/', (request, response) => {
    response.render('contact')
})





module.exports =  router;