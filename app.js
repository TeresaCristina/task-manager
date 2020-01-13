/*13 January, 2020
Teresa Costa*/

const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const exphbs  = require('express-handlebars');
const methodOverride = require('method-override');

//loads the environment variables
dotenv.config(); 
const DATA_BASE = process.env.DATABASE;
const LOCAL_PORT = process.env.PORT;

//initialize
const app = express();
app.use(express.static('public')); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.engine('handlebars', exphbs({extname: 'handlebars', defaultView: 'main',
    layoutsDir: __dirname + '/views/layouts/', partialsDir: __dirname + '/views/partials/'}));
app.set('view engine', 'handlebars');

//routes
app.use('/tasks', require('./routes/tasks'));
app.use('/', require('./routes/general'));

//connects the database
mongoose.connect(DATA_BASE, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
.then(()=>{
    console.log(`Database is connected`)
}).catch(err=>{
    console.log(`Database is not connected: ${err}`);
})
mongoose.Promise = global.Promise;

//connect the server
let PORT = LOCAL_PORT;
app.listen(PORT, () => {
    console.log('Server is connected at port: ' + PORT);
});