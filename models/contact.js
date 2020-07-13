let mongoose = require('mongoose');

let ContactSchema = mongoose.Schema({
    nom: String,
    prenom:String,
    email: String,
    telephone: Number,
    message: String
})

let contact = mongoose.model('contact', ContactSchema)

module.exports = contact;