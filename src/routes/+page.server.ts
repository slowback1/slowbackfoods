import RecipeHelpers from "$lib/recipeHelpers";

export function load() {
    let recipes = RecipeHelpers.GetAllRecipes();

    return { recipes };
}