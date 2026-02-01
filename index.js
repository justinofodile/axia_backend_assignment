const express = require("express");
const postModel = require("./schemas/postSchema");
const postRouter = require("./routers/postRouter");
const connectDB = require("./config/db");
const userRouter = require("./routers/userRouter");
require("dotenv").config();

connectDB();

const app = express();
const port = process.env.PORT || 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/", postRouter);
app.use("/api/", userRouter);

app.listen(port, () => {
  console.log(`Server Listening on port ${port}`);
});
