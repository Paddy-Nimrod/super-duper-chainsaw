const express = require("express");
const bodyParser = require("body-parser");
var cors = require("cors");
const shopRoutes = require("./Routes/router");

const app = express();
const port = 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(cors());

app.use("/home", shopRoutes);

app.listen(port, () => {
  console.log(`application running on port ${port}`);
});
