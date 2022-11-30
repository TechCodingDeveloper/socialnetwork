const express = require("express");
const { uploadImages } = require("../controllers/uploadController");
const imageUpload = require("../middlwares/imageUpload");
const router = express.Router();

router.post("/uploadImages", imageUpload, uploadImages);

module.exports = router;
