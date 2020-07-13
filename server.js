let express = require('express');
let app = express();
let path = require('path');
let bodyParser = require('body-parser');
let IndexRoute = require('./routes/index');
let ContactRouter = require('./routes/contact');

//  Config Engine Template
app.set('view engine', 'ejs');


//  Middleware
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(express.static( path.join(__dirname, 'public')));
app.use(express.static( path.join(__dirname, 'node_modules/bootstrap/dist/css')));
app.use('/', IndexRoute);
app.use('/contact', ContactRouter);


app.get('/', (request, response) => {
    response.send('Hello')
})



app.listen(3000, (err) => {
    if (err) {
        throw err
    }
    console.log('Listenning on port 3000')
})