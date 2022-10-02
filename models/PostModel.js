const mongoose = require("mongoose");

const schema = mongoose.Schema;

const PostSchema = new schema({});

module.exports = mongoose.model("Post", PostSchema);
