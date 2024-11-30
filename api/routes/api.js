const express = require("express");
const Ninja = require("../models/ninja");
const router = express.Router();

// Get a list of ninjas from the database
router.get("/ninjas", (req, res, next) => {
  res.send({ type: "GET" });
});

// Add a new ninja to the database
router.post("/ninjas", (req, res, next) => {
  Ninja.create(req.body).then((ninja) => {
    res.send(ninja);
  }).catch((err) => {
    err.status = 422;
    next(err);
  });
});

// Update an existing ninja in the database
router.put("/ninjas/:id", (req, res, next) => {
  const id = req.params.id;
  Ninja.findByIdAndUpdate(id, req.body).then(() => {
    Ninja.findById(id).then((ninja) => {
      res.send(ninja);
    });
  }).catch((err) => {
    err.status = 404;
    next(err);
  });
});

// Delete a ninja from the database
router.delete("/ninjas/:id", (req, res, next) => {
  const id = req.params.id;
  Ninja.findByIdAndDelete(id).then((ninja) => {
    res.send(ninja);
  }).catch((err) => {
    err.status = 404;
    next(err);
  });
});

module.exports = router;
