let express = require('express');
let router = express.Router();
let contact = require('../models/contact')

router.get('/', (request, response) => {
    response.render('contact')
})

router.post('/', (request, response) => {
    let contacte = contact();
    contacte.nom = request.body.nom;
    contacte.prenom = request.body.prenom;
    contacte.telephone = request.body.telephone;
    contacte.message = request.body.message;
    contacte.save((err) => {
        if(err) {
            throw err
        }
        console.log('Message Envoyé')
    })
    response.redirect('/')
})





module.exports =  router;