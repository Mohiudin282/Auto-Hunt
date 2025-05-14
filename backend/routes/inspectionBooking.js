const express = require("express");
const inspectionController = require("../controllers/inspectionController");

const router = express.Router();

router.post('/', inspectionController.createBooking);

module.exports = router;