const { newsletter, displayNewsletter } = require("../models/newsletterModel");

exports.createNewsletter = (req, res) => {
    const { title, content, picture_url } = req.body;
    const user_id = req.user.user_id;
    newsletter({ title, content, picture_url, user_id }, (err, result) => {
        if (err) return res.status(500).json({ error: "Database Error", message: err.message });
        res.status(200).json({ message: "Added Successfully", result });
    })
}

exports.fetchNewsletter = (req, res) => {
    displayNewsletter((err, result) => {
        if (err) return res.status(500).json({ error: "Database Error", message: err.message });
        res.status(200).json({ message: "News fetched successfully", result });
    })
}