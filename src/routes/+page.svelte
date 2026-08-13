<script lang="ts">
	import AlphabetTable from '$components/AlphabetTable.svelte';
	import Collapsible from '$components/Collapsible.svelte';
	import Header from '$components/Header.svelte';
	import Trainer from '$components/Trainer.svelte';
	import appState from '$lib/AppState.svelte';
</script>

<Header />
<div class="wrapper">
	<Trainer />
	<Collapsible bind:isOpen={appState.settingsShown}>
		<AlphabetTable />
	</Collapsible>
</div>

<style>
	.wrapper {
		max-width: 800px;
		width: 90%;
		margin: 0 auto;
	}
</style>
