const express = require("express");
const {
  createPost,
  getAllPost,
  getPostByID,
  deletePostByID,
  updatePostByID,
} = require("../controllers/postController");

const postRouter = express.Router();
// Creating post
postRouter.post("/", createPost);

// Getting all posts
postRouter.get("/posts", getAllPost);

// Get post by Id
postRouter.get("/post/:id", getPostByID);

// Update a post by id
postRouter.put("/post/:id", updatePostByID);

// Delete post by ID
postRouter.delete("/post/:id", deletePostByID);

module.exports = postRouter;
