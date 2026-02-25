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
  .post("/:id", createPost)

  // Getting all posts
  .get("/", getAllPost)

  // Get post by Id
  .get("/:id", getPostByID)

  // Update a post by id
  .put("/:id", updatePostByID)

  // Delete post by ID
  .delete("/:id", deletePostByID);

module.exports = postRouter;
