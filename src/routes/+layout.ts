import RecipeHelpers from "$lib/recipeHelpers";

export const prerender = true;

export function load() {
    let recipes = RecipeHelpers.GetNewestRecipes();

    return { recipes: recipes };
}