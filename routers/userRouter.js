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
  .get("/users", getAllUser)

  // Get post by Id
  .get("/user/:id", getUserByID)

  // Update a post by id
  .put("/user/:id", updateUserByID)

  // Delete post by ID
  .delete("/user/:id", deleteUserByID);

module.exports = userRouter;
