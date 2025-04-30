require("dotenv").config();
const express = require('express');
const app = express();
const session = require('express-session');
//include route files
const registerRoute = require('./routes/register');
const loginRoute = require('./routes/login');
const dashboardRoute = require('./routes/dashboard');
const googleAuthRoute = require('./routes/googleAuth');
const logoutRoute = require('./routes/logout');
const passport = require('./config/passport');



app.get('/', function(req, res){
    res.send('Hello World!');
});

const path = require('path'); // Add this at the top

app.set('view engine', 'ejs');
//app.set('views', path.join(__dirname, 'views'));


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static('public'));
//Session middleware important for login sessions.
app.use(session({
    secret: 'mySuperSecretKey',
    resave: false,
    saveUninitialized: false
}));
//passport middlewares
app.use(passport.initialize());
app.use(passport.session());

//middleware to restrict access to /dashboard wihout authentication.
function ensureAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }
    res.redirect('/login');
}

//use routes
app.use('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/dashboard', ensureAuthenticated, dashboardRoute);
app.use('/auth', googleAuthRoute);
app.use('/logout', logoutRoute);


const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log(`Backend is listening on port ${PORT}`);
});