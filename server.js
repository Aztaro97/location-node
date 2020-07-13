let express = require('express')
let app = express()
let ejs = require('ejs');
let path = require('path');
let mongoose = require('mongoose');
let bodyParser = require('body-parser')
let IndexRoute = require('./Routes/index');
let ContactRoute = require('./routes/contact')


mongoose.connect('mongodb+srv://aztaro97:99156832@location-2k77y.gcp.mongodb.net/maison?retryWrites=true&w=majority' ,  { useUnifiedTopology: true, useNewUrlParser: true });
let db = mongoose.connection
db.on('error', 
    console.error.bind(console, 'error')
)
db.once('open', ()=> {console.log('We are connected')})

app.set('view engine', 'ejs')


// Middleware 
app.use(bodyParser.urlencoded( {extended:false}));
app.use(bodyParser.json());
app.use(express.static( path.join(__dirname, 'public')))
app.use('/', IndexRoute)
app.use('/contact', ContactRoute )



let port = process.env.PORT || 3000;
app.listen(port, (err) => {
    if (err) {
        throw err
    }
    console.log('Listenning on port 8080')
})