<script lang="ts">
	import type { Recipe } from '$lib/types';

	export let data: { recipes: Recipe[] };
</script>

<h1>Recipe List</h1>

{#each data.recipes as recipe}
	<a class="recipe-card" href={`/recipe/${recipe.id}`}>
		<p class="recipe-card__title">
			{recipe.name}
		</p>
		<span class="recipe-card__type">
			{recipe.recipeType}
		</span>
		<p class="recipe-card__description">
			{recipe.description}
		</p>
	</a>
{/each}

<style>
	a {
		color: var(--link-color);
	}

	.recipe-card {
		display: flex;
		flex-direction: column;
		border: 1px solid var(--secondary-color-font);
		padding: 4px 8px;
		margin-bottom: 12px;
		position: relative;
		transition: transform 0.5s;
		transform: translateX(0);
	}

	.recipe-card:hover {
		transform: translateX(12px);
	}

	.recipe-card__title {
		font-size: 1.5rem;
		font-weight: bold;
		margin: 0;
	}

	.recipe-card__description {
		margin: 12px 0;
	}
	.recipe-card__type {
		position: absolute;
		top: 8px;
		right: 12px;
		padding: 4px;
		border-radius: 12px;
		background-color: var(--primary-color);
		min-width: 80px;
		text-align: center;
	}

	@media screen and (max-width: 400px) {
		.recipe-card__type {
			position: relative;
			top: unset;
			min-width: unset;
			right: unset;
			width: fit-content;
			margin-top: 12px;
		}
	}
</style>
