const db = require("../config/db");

exports.inspectionBooking = ({user_id, location, car_type, model_year, full_address, full_name, phone_no}, callback) => {
    const sql = 'INSERT INTO inspection_booking (user_id, location, car_type, model_year, full_address, full_name, phone_no, booking_time, created_at, status) VALUES (?, ?, ?, ?, ?, ?, ?, NOW(), NOW(), "pending")';
    db.query(sql, [user_id, location, car_type, model_year, full_address, full_name, phone_no], callback);
}