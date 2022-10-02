const express = require("express");
const router = express.Router();

const postController = require("../controllers/controller");

// homepage route
router.get("/blog", postController.getPosts);
router.get("/blog/:id", postController.getPostById);

module.exports = router;
