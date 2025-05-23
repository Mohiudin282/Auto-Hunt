const db = require('../config/db');

exports.newsletter = ({ title, content, picture_url, user_id }, callback) => {
  const sql = `
    INSERT INTO newsletter 
    (title, content, published_date, picture_url, user_id) 
    VALUES (?, ?, ?, ?, ?)`;

  const published_date = new Date();

  db.query(sql, [title, content, published_date, picture_url, user_id], callback);
};

exports.displayNewsletter = (callback) => {
    const sql = `SELECT * FROM newsletter`;
    db.query(sql, callback);
}
