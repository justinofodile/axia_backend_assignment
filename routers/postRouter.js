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
postRouter
  .post("/", createPost)

  // Getting all posts
  .get("/posts", getAllPost)

  // Get post by Id
  .get("/post/:id", getPostByID)

  // Update a post by id
  .put("/post/:id", updatePostByID)

  // Delete post by ID
  .delete("/post/:id", deletePostByID);

module.exports = postRouter;
