const bcrypt = require("bcrypt");
const { generateToken } = require("../helpers/tokens");

exports.home = (req, res) => {
  res.send("welcome from login");
};

const { validateEmail, validateLength } = require("../helpers/validation");
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

    if (!validateEmail(email)) {
      return res.status(500).json({
        message: "invalid email address",
      });
    }

    const emailCheck = await UserDocument.findOne({ email: email });
    if (emailCheck) {
      return res.status(500).json({
        message:
          "The email address already exists, please  try with adiffrent email address",
      });
    }

    if (!validateLength(first_name, 3, 30)) {
      return res.status(500).json({
        message: "first name must between 3 and 30 character",
      });
    }

    if (!validateLength(last_name, 3, 30)) {
      return res.status(500).json({
        message: "last name must between 3 and 30 character",
      });
    }

    if (!validateLength(password, 6, 40)) {
      return res.status(500).json({
        message: "password must between 6 and 40 character",
      });
    }
    const cryptedPassword = await bcrypt.hash(password, 12);

    const usernameCheck = await UserDocument.findOne({ username: username });
    if (usernameCheck) {
      return res.status(500).json({
        message:
          "The username already exists, please  try with adiffrent username",
      });
    }

    const user = await new UserDocument({
      first_name,
      last_name,
      email,
      password: cryptedPassword,
      username,
      bYear,
      bMonth,
      bDay,
      gender,
    }).save();

    console.log(user._id);

    // const emailVerificationToken = generateToken(
    //   { id: user._id.toString() },
    //   "30m"
    // );

    res.json(user);
  } catch (e) {
    return res.status(500).json({ message: e });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const cryptedPassword = await bcrypt.hash(password, 12);

    const user = await UserDocument.findOne({
      email: email,
    });

    if (!user) {
      return res
        .status(400)
        .json({ message: "the email or password not exist" });
    }

    const passwordCheck = await bcrypt.compare(password, user.password);
    if (!passwordCheck) {
      return res
        .status(400)
        .json({ message: "the email or password not exist" });
    }

    const token = generateToken({ id: user._id.toString() }, "30m");

    res.send({
      id: user._id,
      username: user.username,
      picture: user.picture,
      first_name: user.first_name,
      last_name: user.last_name,
      token: token,
      verified: user.verified,
      message: "Register Success",
    });
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
