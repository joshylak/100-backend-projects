    import express from 'express';
    const router = express.Router();

    let recipes = [
    {
        id: 1,
        title: 'Spaghetti Bolognese',
        ingredients: ['Spaghetti', 'Minced Beef', 'Tomato Sauce', 'Onions', 'Garlic'],
        instructions: 'Cook pasta. Brown beef. Add sauce and veggies. Combine and serve.',
        cookTime: 30
    }
    ];

    // Get all recipes
    router.get('/', (req, res) => {
    res.json(recipes);
    });

    // Get recipe by ID
    router.get('/:id', (req, res) => {
    const recipe = recipes.find(r => r.id === parseInt(req.params.id));
    if (!recipe) return res.status(404).json({ message: 'Recipe not found' });
    res.json(recipe);
    });

    // Create a new recipe
    router.post('/', (req, res) => {
    const { title, ingredients, instructions, cookTime } = req.body;
    const newRecipe = {
        id: recipes.length + 1,
        title,
        ingredients,
        instructions,
        cookTime
    };
    recipes.push(newRecipe);
    res.status(201).json(newRecipe);
    });

    // Update a recipe
    router.put('/:id', (req, res) => {
    const recipe = recipes.find(r => r.id === parseInt(req.params.id));
    if (!recipe) return res.status(404).json({ message: 'Recipe not found' });

    const { title, ingredients, instructions, cookTime } = req.body;
    if (title) recipe.title = title;
    if (ingredients) recipe.ingredients = ingredients;
    if (instructions) recipe.instructions = instructions;
    if (cookTime) recipe.cookTime = cookTime;

    res.json(recipe);
    });

    // Delete a recipe
    router.delete('/:id', (req, res) => {
    const index = recipes.findIndex(r => r.id === parseInt(req.params.id));
    if (index === -1) return res.status(404).json({ message: 'Recipe not found' });

    const deleted = recipes.splice(index, 1);
    res.json(deleted[0]);
    });

    export default router;
