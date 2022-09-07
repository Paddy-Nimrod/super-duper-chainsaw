const express = require("express");
const router = express.Router();

const productController = require("../controllers/controller");

// homepage route
router.get("/shop", productController.getProducts);
router.get("/shop/:id", productController.getProductById);

module.exports = router;
