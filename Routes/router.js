const express = require("express");
const router = express.Router();

const productController = require("../controllers/controller");

// homepage route
router.get("/shop", productController.getProducts);

module.exports = router;
