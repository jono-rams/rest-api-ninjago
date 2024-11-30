const express = require("express");
const Ninja = require("../models/ninja");
const router = express.Router();

// Get a list of ninjas from the database
router.get("/ninjas", (req, res) => {
  res.send({ type: "GET" });
});

// Add a new ninja to the database
router.post("/ninjas", (req, res) => {
  Ninja.create(req.body).then((ninja) => {
    res.send(ninja);
  });
});

// Update an existing ninja in the database
router.put("/ninjas/:id", (req, res) => {
  res.send({ type: "PUT" });
});

// Delete a ninja from the database
router.delete("/ninjas/:id", (req, res) => {
  res.send({ type: "DELETE" });
});

module.exports = router;
