const PostDocument = require("../models/postDocument");

exports.createPost = async (req, res) => {
  try {
    const post = await new PostDocument(req.body).save();
    res.json(post);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
