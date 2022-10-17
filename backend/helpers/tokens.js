const jwt = require("jsonwebtoken");

exports.generateToken = (payload, expited) => {
  return jwt.sign(payload, "Socialnetwork", {
    expiresIn: expited,
  });
};
