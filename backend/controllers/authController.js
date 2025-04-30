const User = require("../models/userModel");
const bcrypt = require("bcryptjs");

exports.registerUser = async (req, res) => {
  const data = req.body;
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(data.password, salt);
    data.password = hashedPassword;

    User.createUser(data, (err, result) => {
      if(err) return res.status(500).json({error: "Database error", message: err.message});
      res.status(200).json({message: "User register successfuly", result});
    });

  } catch (error) {
    res.status(500).json({error: "Hashing error", message: error.message});
  }
  
}
