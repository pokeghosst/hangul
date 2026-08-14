<script>
	import Header from '$components/Header.svelte';
</script>

<div id="root">
	<Header />
	<main>
		<slot></slot>
	</main>
</div>
