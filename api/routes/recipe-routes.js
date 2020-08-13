const express = require("express");

const Helpers = require("../../data/helpers/db-helpers");

const router = express.Router();

router.get("/", (req, res) => {
  Helpers.getRecipes()
    .then((recipes) => {
      res.status(200).json({ recipes });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get("/:id/shoppingList", (req, res) => {
  Helpers.getShoppingList(req.params.id)
    .then((shoppingList) => {
      res.status(200).json({ shoppingList });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

router.get("/:id/instructions", (req, res) => {
  Helpers.getInstructions(req.params.id)
    .then((instructions) => {
      res.status(200).json({ instructions });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
