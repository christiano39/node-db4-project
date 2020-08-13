exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipe_ingredients")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("recipe_ingredients").insert([
        {
          recipe_id: 1,
          ingredient_id: 1,
          step_number: 1,
          quantity: 1,
          quantity_unit: "box",
          instructions: "Boil noodles until noodly, then put on plate",
        },
        {
          recipe_id: 1,
          ingredient_id: 2,
          step_number: 2,
          quantity: 1,
          quantity_unit: "can",
          instructions: "Add sauce and munch down",
        },
        {
          recipe_id: 2,
          ingredient_id: 3,
          step_number: 1,
          quantity: 4,
          instructions: "Mash avocado until mashed",
        },
        {
          recipe_id: 2,
          ingredient_id: 4,
          step_number: 2,
          quantity: 2,
          quantity_unit: "dashes",
        },
        {
          recipe_id: 2,
          ingredient_id: 5,
          step_number: 3,
          quantity: 6,
          quantity_unit: "drops",
        },
      ]);
    });
};
