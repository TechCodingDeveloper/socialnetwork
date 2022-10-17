const express = require("express");
const { home, register, login } = require("../controllers/loginController");

const router = express.Router();

router.post("/login/register", register);
router.post("/login", login);

module.exports = router;
