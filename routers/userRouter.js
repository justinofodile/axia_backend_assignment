const express = require("express");
const {
  createUser,
  getAllUser,
  getUserByID,
  deleteUserByID,
  updateUserByID,
} = require("../controllers/userController");

const userRouter = express.Router();
// Creating post
userRouter
  .post("/register", createUser)

  // Getting all posts
  .get("/", getAllUser)

  // Get post by Id
  .get("/:id", getUserByID)

  // Update a post by id
  .put("/:id", updateUserByID)

  // Delete post by ID
  .delete("/:id", deleteUserByID);

module.exports = userRouter;
