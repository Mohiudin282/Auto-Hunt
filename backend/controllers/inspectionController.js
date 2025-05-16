const { inspectionBooking, displayBookings, updateStatus } = require("../models/inspectionModel");

exports.createBooking = (req, res) => {
    const {location, car_type, model_year, full_address, full_name, phone_no} = req.body;
    const user_id = req.user.user_id;
    inspectionBooking({user_id, location, car_type, model_year, full_address, full_name, phone_no}, (err, result) => {
        if(err) return res.status(500).json({error: "Database Error", message: err.message});
        res.status(200).json({message: "Booking Successfull", result});
    })
}

exports.fetchBookings = (req, res) => {
    displayBookings((err, result)=>{
        if(err) return res.status(500).json({error: "Database Error", message: err.message});
        res.status(200).json({message: "Booking fetched successfully", result});
    });
}

exports.changeStatus = (req, res) => {
    const booking_id = req.params.id;
    const { status } = req.body;

    updateStatus(booking_id, status, (err, result) => {
        if(err) return res.status(500).json({success: false, message: "Status couldn't be changed"});
        res.status(200).json({success: true, message: 'Status updated successfully'});
    });
}