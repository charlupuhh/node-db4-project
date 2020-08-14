const db = require('../data/db-config')

module.exports = {
    getRecipes,
    getShoppingList,
    getInstructions,
};

function getRecipes() {
    return db('recipes');
}

function getShoppingList(id) {
    return db('ingredients')
        .join('recipe_ingredients', 'recipe_ingredients.ingredient_id', 'ingredients.id')
        .where({ recipe_id: id })
}

function getInstructions(id){
    return db('recipe_instructions')
        .join('recipes as r', 'r.id', 'recipe_instructions.recipe_id')
        .where({ recipe_id: id })
        .select('r.recipe_name', 'recipe_instructions.step_number', 'recipe_instructions.instruction')
        .orderBy('recipe_instructions.step_number')
}