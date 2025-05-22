<script>
	let { children } = $props()
</script>

<nav>
    <ul>
		{@render children()}
	</ul>
</nav>

<style>
	ul {
		display: flex;
		list-style: none;
		gap: 1rem;
	}
</style>