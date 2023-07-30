<script lang="ts">
	import type { Recipe } from '$lib/types';

	export let recipes: Recipe[] = [];

	let recipeMenuOpen = false;
</script>

<header>
	<a href="/">Home</a>

	<nav>
		<div class="menu-wrapper" role="menu">
			<a
				role="menuitem"
				on:click={() => (recipeMenuOpen = !recipeMenuOpen)}
				aria-expanded={recipeMenuOpen}
				href="#"
				tabindex="0"
				class="menu-toggle"
			>
				Recipes
			</a>
			<div
				class="sub-menu"
				class:sub-menu--active={recipeMenuOpen}
				aria-label="Recipes"
				role="menu"
			>
				{#each recipes as recipe}
					<a on:click={() => (recipeMenuOpen = false)} href={`/recipe/${recipe.id}`}>
						{recipe.name}
					</a>
				{/each}
				<a on:click={() => (recipeMenuOpen = false)} href="/recipe"> All Recipes</a>
			</div>
		</div>
	</nav>
</header>

<style>
	header {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		padding: 16px 24px;
		background-color: var(--primary-color);
		color: var(--primary-color-font);
	}

	nav {
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		gap: 12px;
	}
	.menu-wrapper {
		position: relative;
	}
	.sub-menu {
		display: none;
		position: absolute;
		top: calc(-100% + 40px);
		right: 0;
		min-width: 150px;
		width: fit-content;
		list-style: none;
		background-color: var(--tertiary-color);
		flex-direction: column;
	}
	.sub-menu a {
		border-bottom: 1px solid var(--primary-color-font);
		padding: 8px 8px;
	}
	.sub-menu :last-child {
		border-bottom: none;
	}
	.sub-menu--active {
		display: flex;
	}
</style>
