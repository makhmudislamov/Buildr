// enviroment variables
require('dotenv').config();

const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const passport = require('passport')

const app = express();
const port = process.env.PORT || 3000

// Express handlebars
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// static scripts and styles in public
app.use(express.static('public'));

// MIDDLEWARE
// body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

// CONTROLLERS
require('./controllers/users.js')(app);
require('./controllers/index.js')(app);
require('./controllers/auth.js')(app);

// START
app.listen(port, console.log('App listening on port ' + port))

module.exports = app;
