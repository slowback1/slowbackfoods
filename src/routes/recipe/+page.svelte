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
		<p class="recipe-card__description">
			{recipe.Description}
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
	}

	.recipe-card__title {
		font-size: 1.5rem;
		font-weight: bold;
		margin: 0;
	}

	.recipe-card__description {
		margin: 12px 0;
	}
</style>
