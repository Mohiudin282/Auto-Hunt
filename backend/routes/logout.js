const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    req.logOut(err => {
        if(err) {return next(err);}
        res.redirect('/login');
    });
    console.log('user logged out');
});

module.exports = router;