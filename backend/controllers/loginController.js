exports.home = (req, res) => {
  res.send("welcome from login");
};
const UserDocument = require("../models/userDocument");
exports.register = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      email,
      password,
      username,
      bYear,
      bMonth,
      bDay,
      gender,
    } = req.body;

    const user = await new UserDocument({
      first_name,
      last_name,
      email,
      password,
      username,
      bYear,
      bMonth,
      bDay,
      gender,
    }).save();

    res.json(user);
  } catch (e) {
    return res.status(500).json({ message: e });
  }
};
