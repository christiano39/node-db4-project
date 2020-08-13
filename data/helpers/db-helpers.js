const db = require("../db-config");
const { where } = require("../db-config");

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
  getRecipesByIngredient,
};

function getRecipes() {
  return db("recipes");
}

function getShoppingList(recipe_id) {
  return db("recipes as r")
    .join("recipe_ingredients as ri", "r.id", "=", "ri.recipe_id")
    .join("ingredients as i", "i.id", "=", "ri.ingredient_id")
    .select("i.name", "ri.quantity", "ri.quantity_unit")
    .where({ "r.id": recipe_id });
}

function getInstructions(recipe_id) {
  return db("recipes as r")
    .join("recipe_ingredients as ri", "r.id", "=", "ri.recipe_id")
    .join("ingredients as i", "i.id", "=", "ri.ingredient_id")
    .select(
      "ri.step_number",
      "ri.instructions",
      "i.name as ingredient",
      "ri.quantity",
      "ri.quantity_unit"
    )
    .where({ "r.id": recipe_id })
    .orderBy("ri.step_number");
}

function getRecipesByIngredient(ingredient_id) {
  return db("recipes as r")
    .join("recipe_ingredients as ri", "r.id", "=", "ri.recipe_id")
    .join("ingredients as i", "i.id", "=", "ri.ingredient_id")
    .select("r.id", "r.name as recipe")
    .where({ "ri.ingredient_id": ingredient_id });
}
