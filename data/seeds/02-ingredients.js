exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex("ingredients").insert([
        { name: "spaghetti noodles" },
        { name: "spaghetti sauce" },
        { name: "avocado" },
        { name: "salt" },
        { name: "lemon juice" },
      ]);
    });
};
