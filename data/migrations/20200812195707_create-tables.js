exports.up = function (knex) {
  return knex.schema
    .createTable("recipes", (tbl) => {
      tbl.increments("id");
      tbl.string("name", 255).notNullable().unique().index();
    })
    .createTable("ingredients", (tbl) => {
      tbl.increments("id");
      tbl.string("name", 255).notNullable().unique().index();
    })
    .createTable("recipe_ingredients", (tbl) => {
      tbl.increments("id");

      tbl
        .integer("recipe_id")
        .unsigned()
        .notNullable()
        .references("recipes.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");

      tbl
        .integer("ingredient_id")
        .unsigned()
        .notNullable()
        .references("ingredients.id")
        .onDelete("RESTRICT")
        .onUpdate("CASCADE");

      tbl.integer("step_number").notNullable();
      tbl.float("quantity").notNullable();
      tbl.string("quantity_unit", 255);
      tbl.string("instructions");
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("recipe_ingredients")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
