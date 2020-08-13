const express = require("express");

const Helpers = require("../../data/helpers/db-helpers");

const router = express.Router();

router.get("/:id/recipes", (req, res) => {
  Helpers.getRecipesByIngredient(req.params.id)
    .then((recipes) => {
      res.status(200).json({ recipes });
    })
    .catch((err) => {
      res.status(500).json({ error: err.message });
    });
});

module.exports = router;
