const express = require("express");
const { home, register } = require("../controllers/loginController");

const router = express.Router();

router.post("/login/register", register);

module.exports = router;
