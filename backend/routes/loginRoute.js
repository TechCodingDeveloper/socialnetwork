const express = require("express");
const {
  home,
  register,
  login,
  auth,
} = require("../controllers/loginController");
const { authUser } = require("../middlwares/auth");

const router = express.Router();

router.post("/login/register", register);
router.post("/login", login);

module.exports = router;
