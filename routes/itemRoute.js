const express = require("express");

const Item = require("../models/Item");

const router = express.Router();

// Gets all Items and spit in json all the items
router.get("/", (req, res) => {
  Item.find()
    .then((items) => res.json(items))
    .catch((err) => console.log(err));
});

// Post an item to api/items
router.post("/", (req, res) => {
  const { name } = req.body;
  const newUser = new Item({ name });
  newUser
    .save()
    .then((item) => res.json(item))
    .catch((err) => console.log(err));
});

module.exports = router;
