<script lang="ts">
	import AlphabetTable from '$components/AlphabetTable.svelte';
</script>

<h1>Hangul Alphabet</h1>
<AlphabetTable />

<style>
	h1 {
		font-family: var(--font-display);
		font-size: 40px;
		font-weight: 300;
		color: var(--fg-primary);
		margin: 0px;
		letter-spacing: -0.02em;
		margin-top: 28px;
	}
</style>
