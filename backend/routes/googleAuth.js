const express = require('express');
const passport = require('passport');
const router = express.Router();

router.get('/google', passport.authenticate('google', {
    scope: ['profile', 'email'],
    prompt: 'select_account'
}));

router.get('/google/callback', passport.authenticate('google', {
    failureRedirect: '/login',
    successRedirect: '/dashboard',
}));
module.exports = router;