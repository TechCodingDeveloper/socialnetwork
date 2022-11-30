const express = require("express");
const { createPost, getAllPost } = require("../controllers/postController");

const router = express.Router();

router.post("/post/createPost", createPost);
router.get("/post/getAllPost", getAllPost);

module.exports = router;
