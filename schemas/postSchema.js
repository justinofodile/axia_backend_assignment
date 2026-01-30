const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  desc: { type: String, required: true },
  topic: { type: String, required: true },
});

module.exports = postSchema;
