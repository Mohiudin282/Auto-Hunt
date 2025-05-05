const express = require('express');
const router = express.Router();
const passport = require('passport')

router.get('/', (req, res) => {
    res.render('login');
});



router.post('/', passport.authenticate('local'), (req, res) => {
    res.json({message: "Login Successfull", user: req.user})
});
module.exports = router;

