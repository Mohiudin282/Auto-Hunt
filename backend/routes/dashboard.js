const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    if(req.isAuthenticated()){
        res.status(200).json({authenticated: true, user: req.user});
    }
    res.status(401).json({authenticated: false, user: req.user});
});

 module.exports = router;