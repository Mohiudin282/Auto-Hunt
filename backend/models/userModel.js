const db = require('../config/db');
const bcrypt = require('bcryptjs')

exports.createUser = (userData, callback) => {
    const { user_id, full_name, email, password } = userData;
    const sql = 'INSERT INTO user (user_id, full_name, email, password) VALUES (?, ?, ?, ?)';
    db.query(sql, [user_id, full_name, email, password], callback);
};


//furthur code is for google authentication.

exports.findUserByGoogleId = (googleId, callback) => {
    const sql = 'SELECT * FROM user WHERE google_id = ?';
    db.query(sql, [googleId], (err, user) => {
        if (err) return callback(err);
        callback(null, user[0]);
    });
}

exports.createGoogleUser = (profile, callback) => {
    const sql = 'INSERT INTO user (full_name, email, google_id) VALUES (?, ?, ?)';
    db.query(sql,
        [profile.displayName, profile.emails[0].value, profile.id],
        (err, result) => {
            if (err) return callback(err);
            callback(null, {
                user_id: result.insertId,
                full_name: profile.displayName,
                email: profile.emails[0].value,
                google_id: profile.id,
            });
        }
    );
}