const db = require("../config/db");

exports.inspectionBooking = ({user_id, location, car_type, model_year, full_address, full_name, phone_no}, callback) => {
    const sql = 'INSERT INTO inspection_booking (user_id, location, car_type, model_year, full_address, full_name, phone_no, booking_time, status) VALUES (?, ?, ?, ?, ?, ?, ?, NOW(), "pending")';
    db.query(sql, [user_id, location, car_type, model_year, full_address, full_name, phone_no], callback);
}

exports.displayBookings = (callback) => {
    const sql = 'SELECT * FROM inspection_booking ORDER BY booking_id DESC';
    db.query(sql, callback);
}

exports.updateStatus = (booking_id, status, callback) => {
    const sql = 'UPDATE inspection_booking SET status = ? WHERE booking_id = ?';
    db.query(sql, [status, booking_id], callback);
}