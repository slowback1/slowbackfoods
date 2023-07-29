<script lang="ts">
	import type { Recipe } from '$lib/types';

	export let data: Recipe;
</script>

<p>{data.name}</p>
<p>{data.Description}</p>

{#each data.ingredients as ingredient}
	<p>{ingredient.name} - {ingredient.amount}</p>
	<p>{ingredient.comment}</p>
{/each}

{#each data.steps as step}
	<p>{step.step}</p>
{/each}
