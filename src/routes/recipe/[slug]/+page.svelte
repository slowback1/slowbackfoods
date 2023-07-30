<script lang="ts">
	import type { Recipe } from '$lib/types';

	export let data: Recipe;
</script>

<h1>{data.name}</h1>
<p>{data.Description}</p>

<div class="recipe__content">
	<div class="recipe__ingredients">
		<h2>Ingredients</h2>
		<ul>
			{#each data.ingredients as ingredient}
				<li>
					<p>{ingredient.name} ({ingredient.amount})</p>
					{#if ingredient.comment}
						<p>{ingredient.comment}</p>
					{/if}
				</li>
			{/each}
		</ul>
	</div>
	<div class="recipe__steps">
		<h2>Steps</h2>
		<ol>
			{#each data.steps as step}
				<li>{step.step}</li>
			{/each}
		</ol>
	</div>
</div>

<style>
	.recipe__content {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.recipe__ingredients,
	.recipe__steps {
		width: 45%;
	}

	li {
		margin-top: 12px;
	}

	@media screen and (max-width: 600px) {
		.recipe__content {
			flex-direction: column;
		}

		.recipe__ingredients,
		.recipe__steps {
			width: 90%;
		}
	}
</style>
