<script lang="ts">
	import { page } from '$app/state';

	const navigation = [
		{ href: '/', label: 'Practice' },
		{ href: '/table', label: 'Alphabet' },
		{ href: '/settings', label: 'Settings' }
	];
</script>

<header>
	<div>
		<h1>Learn Hangul</h1>

		<nav>
			{#each navigation as navLink}
				<a href={navLink.href} class:active={page.url.pathname === navLink.href}>{navLink.label}</a>
			{/each}
		</nav>
	</div>
</header>
