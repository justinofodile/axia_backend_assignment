const postModel = require("../model/postModel");

// Controller to create post
const createPost = async (req, res) => {
  try {
    const { title, desc, topic } = req.body;
    if (!title || !desc || !topic) {
      return res
        .status(201)
        .json({ message: "All fields are required!!! Try again" });
    } else {
      const post = new postModel({ title, desc, topic });
      return await post.save();
      res.status(200).json({ message: post });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to get all post
const getAllPost = async (req, res) => {
  try {
    const post = await postModel.find();
    if (!post)
      return res
        .status(201)
        .json({ message: "Unable to get a post. No post available" });
    res.status(200).json({ message: post });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to get a post by id
const getPostByID = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await postModel.findById(id);
    if (!post)
      return res.status(201).json({
        message: `Unable to get a post!!! No post with the id of ${id}`,
      });
    res.status(200).json({ message: post });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Controller to update post by id
const updatePostByID = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, desc, topic } = req.body;
    const post = await postModel.findByIdAndUpdate(
      id,
      { title, desc, topic },
      { new: true },
    );
    if (!post)
      return res.status(201).json({
        message: `Unable to update any post!!! No post with the id of ${id}`,
      });
    res.status(200).json({ message: post });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Controller to delete post by id
const deletePostByID = async (req, res) => {
  try {
    const id = req.params.id;
    const post = await postModel.findByIdAndDelete(id);
    if (!post)
      return res.status(201).json({
        message: `Unable to delete any post!!! No post with the id of ${id}`,
      });
    res.status(200).json({ message: post });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createPost,
  getAllPost,
  getPostByID,
  deletePostByID,
  updatePostByID,
};
