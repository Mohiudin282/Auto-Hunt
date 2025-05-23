const express = require("express");
const newsController = require("../controllers/newsController");
const router = express.Router();

router.post('/', newsController.createNewsletter);
router.get('/', newsController.fetchNewsletter);


module.exports = router;