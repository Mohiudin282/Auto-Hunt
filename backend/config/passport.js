const passport = require('passport');
const db = require('../config/db');
const bcrypt = require('bcryptjs');
const LocalStrategy = require('passport-local').Strategy;
const GoogleStrategy = require('passport-google-oauth2').Strategy;


const Function = require('../models/userModel')

//this is local strategy.

passport.use(new LocalStrategy(
    {
        usernameField: 'email',
        passwordField: 'password'
    },
    //auth function
    (email, password, done) => {
        db.query('SELECT * FROM user WHERE email = ?', [email], async (err, rows) => {
            if (err) {
                return done(err); // handle any query errors
            }
    
            console.log('Query Answer:', rows);
    
            if (rows.length === 0) {
                return done(null, false, { message: "No user with that email exists" });
            }
    
            const user = rows[0]; // access user from rows
            const isMatch = await bcrypt.compare(password, user.password);
    
            if (!isMatch) {
                return done(null, false, { message: "Password incorrect" });
            }
    
            return done(null, user);
        });
    }
));


passport.serializeUser((user, done) => {
    done(null, user.user_id);
});

passport.deserializeUser((user, done) => {
    db.query('SELECT * FROM user WHERE user_id = ?', [user], (err, rows) => {
        if (err) {
            return done(err);
        }

        if (rows.length === 0) {
            return done(new Error('User not found'));
        }

        return done(null, rows[0]);
    });
});


module.exports = passport;

//this is google authentication strategy.

passport.use(new GoogleStrategy(
    {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: 'http://localhost:3000/auth/google/callback',
    },
    (request, accessToken, refreshToken, profile, done) => {
        Function.findUserByGoogleId(profile.id, (err, result) => {
            if (err) return done(err);
            if (result) return done(null, result);

            Function.createGoogleUser(profile, (err, user) => {
                if (err) return done(err);
                return done(null, user);
            });
        });
    }
));
