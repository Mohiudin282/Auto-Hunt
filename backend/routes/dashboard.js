const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('dashboard', {name: req.user.full_name});
});

 module.exports = router;