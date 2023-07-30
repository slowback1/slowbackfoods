import RecipeHelpers from '$lib/recipeHelpers';

export function entries() {
	let recipes = RecipeHelpers.GetAllRecipes();

	return recipes.map((recipe) => ({ slug: recipe.id }));
}

export function load({ params }) {
	let { slug } = params;

	let recipe = RecipeHelpers.GetRecipeById(slug);

	if (!recipe) throw new Error('Recipe Not Found');

	console.log(recipe);

	return recipe;
}
