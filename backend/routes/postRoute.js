const express = require("express");
const { createPost } = require("../controllers/postController");

const router = express.Router();

router.get("/createPost", createPost);

module.exports = router;
