exports.seed = function (knex) {
  return knex("recipe_instructions").insert([
    {
      recipe_id: 1,
      step_number: 1,
      instruction: "Boil water",
    },
    {
      recipe_id: 1,
      step_number: 2,
      instruction: "Add noodles to water",
    },
    {
      recipe_id: 1,
      step_number: 3,
      instruction:
        "Drain water",
    },
    {
      recipe_id: 1,
      step_number: 4,
      instruction:
        "Add herbs",
    },
    {
      recipe_id: 1,
      step_number: 5,
      instruction: "Saute with spicy sauce",
    },
  ]);
};