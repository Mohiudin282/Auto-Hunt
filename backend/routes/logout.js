const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    req.logOut(err => {
      if (err) return next(err);
  
      console.log('user logged out');
      res.status(200).json({ sessionexpire: true });
    });
  });
  
module.exports = router;