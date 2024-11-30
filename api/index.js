const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

// get environment variables
require("dotenv").config();
const db_username = process.env.DB_USERNAME;
const db_password = process.env.DB_PASSWORD;

const uri = `mongodb+srv://${db_username}:${db_password}@cluster0.ugkk0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// set up express app
const app = express();

// connect to MongoDB
mongoose.connect(uri, { dbName: "ninjago" });
mongoose.Promise = global.Promise;

// parse application/json
app.use(bodyParser.json());

// initialize routes
app.use("/api", require("./routes/api"));

// error handling middleware
app.use((err, req, res, next) => {
  // console.error(err);
  const status = err.status || 500;
  res.status(status).send({ error: err.message });
});

// listen for requests
app.listen(process.env.port || 3000, function () {
  console.log("now listening for requests");
});
