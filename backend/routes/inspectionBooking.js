const express = require("express");
const inspectionController = require("../controllers/inspectionController");

const router = express.Router();

router.post('/', inspectionController.createBooking);
router.get('/', inspectionController.fetchBookings);

router.put('/:id', inspectionController.changeStatus);

module.exports = router;