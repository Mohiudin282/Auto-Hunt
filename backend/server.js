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
const inspectionRoute = require('./routes/inspectionBooking');
const newsletterRoute = require('./routes/newsletter')
const cors = require('cors');
const { inspectionBooking } = require("./models/inspectionModel");

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}));

app.get('/', function(req, res){
    res.send('Hello World!');
});

app.get('/api/test', (req, res) => {
    res.json({message: "CORS is working"});
})


app.set('view engine', 'ejs');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//app.use(express.static('public'));
//Session middleware important for login sessions.
app.use(session({
    secret: 'mySuperSecretKey',
    resave: false,
    saveUninitialized: false,
}));
//passport middlewares
app.use(passport.initialize());
app.use(passport.session());


//use routes
app.use('/register', registerRoute);
app.use('/login', loginRoute);
app.use('/dashboard', dashboardRoute);
app.use('/auth', googleAuthRoute);
app.use('/logout', logoutRoute);
app.use('/inspection', inspectionRoute);
app.use('/newsletter', newsletterRoute);


const PORT = process.env.PORT || 3000;
app.listen(PORT, function(){
    console.log(`Backend is listening on port ${PORT}`);
});