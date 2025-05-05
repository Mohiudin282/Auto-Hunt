const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email'],
    prompt: 'select_account'
}));

router.get('/google/callback', passport.authenticate('google', {
    failureRedirect: 'http://localhost:5173/login',
    successRedirect: 'http://localhost:5173/dashboard',
}));
module.exports = router;