<script lang="ts">
	import { alphabet } from '$lib/alphabet';

	function formatCategoryName(name: string) {
		return name
			.split(/(?=[A-Z])/)
			.map((w) => w[0].toUpperCase() + w.slice(1))
			.join(' ');
	}
</script>

<div class="categories">
	{#each alphabet as category}
		<div class="letter-category">
			<h2>{formatCategoryName(category.name)}</h2>
			<div class="category-cards">
				{#each category.letters as letter}
					<div class="card">
						<span class="letter">{letter.letter}</span><span class="letter-romanization"
							>{letter.romanization}</span
						>
					</div>
				{/each}
			</div>
		</div>
	{/each}
</div>

<style>
	.categories {
		padding: 16px 0px 8px;
	}

	.letter-category {
		margin-bottom: 24px;
	}

	.letter-category h2 {
		font-size: 9px;
		font-weight: 600;
		letter-spacing: 0.12em;
		text-transform: uppercase;
		color: var(--fg-muted);
		font-family: var(--font-body);
		margin-bottom: 10px;
	}
</style>
