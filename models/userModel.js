const mongoose = require("Mongoose");

const schema = mongoose.Schema;

const User = new schema({});

export default mongoose.model("User", User);
