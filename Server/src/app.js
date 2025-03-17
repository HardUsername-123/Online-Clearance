const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();
const userRoutes = require("./routes/userRoutes");

dotenv.config();

//Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});
app.use("/api", userRoutes);

module.exports = app;
