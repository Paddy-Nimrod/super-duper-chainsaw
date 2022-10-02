const Post = require("../models/PostModel");

exports.getPosts = (req, res) => {
  res.status(200).send([
    {
      id: "1",
      title: "The Standard Media",
      description: "the standard media to lay off new workers",
    },
    {
      id: "2",
      title: "New York times",
      description:
        " the news headlines from the ultra heading of the masai kingdom",
    },
  ]);
};

exports.getPostById = (req, res, next) => {
  const postId = req.params.id;

  Post.findById(postId)
    .then()
    .catch((error) => {
      console.log(error);
    });
};

exports.postProduct = (req, res) => {};
