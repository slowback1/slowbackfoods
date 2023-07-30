export interface Recipe {
	id: string;
	description: string;
	ingredients: RecipeIngredient[];
	name: string;
	steps: RecipeStep[];
	recipeType: string;
}

export interface RecipeIngredient {
	amount: string;
	comment?: string;
	name: string;
}

export interface RecipeStep {
	step: string;
}
