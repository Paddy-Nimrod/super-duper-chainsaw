const mongoose = require("mongoose");

const schema = mongoose.Schema;

const Product = new schema({});

export default mongoose.model("Product", Product);
