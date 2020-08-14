
exports.seed = function(knex) {
  return knex('ingredients').insert([
    {id: 1, name: 'noodles'},
    {id: 2, name: 'spicy sauce'},
    {id: 3, name: 'herbs'},
  ])
};
