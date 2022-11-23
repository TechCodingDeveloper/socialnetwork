const express = require("express");
const { uploadImages } = require("../controllers/uploadController");
const imageUpload = require("../middlwares/imageUpload");
const router = express.Router();

router.get("/uploadImages", imageUpload, uploadImages);

module.exports = router;
