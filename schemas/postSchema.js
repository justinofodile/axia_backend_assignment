const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    desc: { type: String, required: true },
    topic: { type: String, required: true },
  },
  { timestamps: true },
);

module.exports = postSchema;
