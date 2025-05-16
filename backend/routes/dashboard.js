const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    if(req.isAuthenticated()){
        return res.status(200).json({authenticated: true, user: req.user});
    }
    return res.status(401).json({authenticated: false, user: req.user});
});

 module.exports = router;