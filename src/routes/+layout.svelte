<script lang="ts">
	import Header from '$lib/components/Header.svelte';
	import type { Recipe } from '$lib/types';

	export let data: { recipes: Recipe[] };
</script>

<Header recipes={data.recipes} />

<main>
	<slot />
</main>

<style global>
	@import '../style/reset.css';
	@import '../style/variables.css';

	main {
		padding: 16px 32px;
		background-color: var(--secondary-color);
		color: var(--secondary-color-font);
		min-height: calc(100vh - 84px);

		& a {
			color: var(--link-color);
		}
	}
</style>
