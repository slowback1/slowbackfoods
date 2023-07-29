import recipeList from '../../../json/recipes.json';

export function entries() {
	let { recipes } = recipeList;

	return recipes.map((recipe) => ({ slug: recipe.id }));
}

export function load({ params }) {
	let { slug } = params;

	let recipe = recipeList.recipes.find((r) => r.id == slug);

	if (!recipe) throw new Error('Recipe Not Found');

	console.log(recipe);

	return recipe;
}
