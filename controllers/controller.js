const Product = require("../models/productModel");

exports.getProducts = (req, res) => {
  res.status(200).send([
    {
      id: "1",
      image: "https://m.media-amazon.com/images/I/81mmaolsY5L._UX522_.jpg",
      name: "bag",
      price: "Kshs.2000",
      description: "this is the g-shock watch for exceptional quality",
    },
  ]);
};

exports.getProductById = (req, res, next) => {
  const productId = req.params.id;

  Product.findById(productId)
    .then()
    .catch((error) => {
      console.log(error);
    });
};

exports.postProduct = (req, res) => {};
