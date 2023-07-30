import recipeList from '../json/recipes.json';

export default class RecipeHelpers {
    static GetAllRecipes() {
        return recipeList.recipes;
    }

    static GetRecipeById(id: string) {
        let recipes = this.GetAllRecipes();

        return recipes.find(r => r.id === id);
    }

    static GetNewestRecipes() {
        let recipes = this.GetAllRecipes();

        if (recipes.length > 3)
            return recipes.slice(-3);

        return recipes;
    }
}
