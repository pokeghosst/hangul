<script lang="ts">
	import { alphabet } from '$lib/alphabet';
	import appState from '$lib/AppState.svelte';
	import { formatCategoryName } from '$lib/util';
</script>

<div class="main-wrapper">
	<h1>Practice groups</h1>
	<div class="group-wrapper">
		{#each alphabet as category, index}
			<label>
				<input
					type="checkbox"
					name={category.name}
					bind:checked={
						() => appState.enabledGroups[index],
						(v) => {
							const a = appState.enabledGroups;
							a[index] = v;
							appState.enabledGroups = a;
						}
					}
				/>
				<div>
					<span class="category-name">{formatCategoryName(category.name)}</span>
					<span class="character-count">{category.letters.length} characters</span>
				</div>
				<div class="letter-examples">
					{#each category.letters.slice(0, 5) as letter}
						<span>{letter.letter}</span>
					{/each}
				</div>
			</label>
		{/each}
	</div>
	<div class="about">
		<p>Hangul Trainer v0.2.0</p>
		<p>Made by Pokeghost</p>
		<p><a href="https://github.com/pokeghosst/hangul">Source code</a></p>
	</div>
</div>

<style>
	.main-wrapper {
		padding: 24px 0px;
	}

	.group-wrapper {
		display: flex;
		flex-direction: column;
		gap: 8px;
	}

	.category-name {
		font-size: 13px;
		font-weight: 500;
		color: var(--fg-primary);
	}

	.character-count {
		font-size: 11px;
		color: var(--fg-muted);
		margin-top: 1px;
	}

	.letter-examples {
		margin-left: auto;
		display: flex;
		gap: 4px;
		flex-wrap: wrap;
		max-width: 140px;
		justify-content: flex-end;
	}

	h1 {
		font-family: var(--font-display);
		font-size: 28px;
		font-weight: 300;
		color: var(--fg-primary);
		margin-bottom: 24px;
		letter-spacing: -0.01em;
	}

	label {
		display: flex;
		align-items: center;
		gap: 10px;
		cursor: pointer;
		padding: 20px 12px;
		border-radius: var(--radius);
		background: transparent;
		border: 1px solid var(--warm-200);
		transition: 0.15s;
	}

	label:has(input[type='checkbox']:checked) {
		background: var(--crimson-50);
		border: 1px solid rgb(241, 188, 197);
	}

	label:has(input[type='checkbox']:checked) .letter-examples {
		color: var(--accent);
	}

	.letter-examples > span {
		font-size: 16px;
		color: var(--fg-muted);
	}

	input[type='checkbox'] {
		width: 15px;
		height: 15px;
		accent-color: var(--accent);
		flex-shrink: 0;
	}

	.about {
		margin-top: 24px;
		color: var(--fg-muted);
		font-size: 14px;
	}

	.about a,
	.about a:visited {
		color: var(--fg-muted);
	}
</style>
