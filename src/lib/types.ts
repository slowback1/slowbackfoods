export interface Recipe {
	id: string;
	Description: string;
	ingredients: RecipeIngredient[];
	name: string;
	steps: RecipeStep[];
}

export interface RecipeIngredient {
	amount: string;
	comment?: string;
	name: string;
}

export interface RecipeStep {
	step: string;
}
