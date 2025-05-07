<script>
	let { children } = $props()
</script>

<nav>
    <ul>
		{@render children()}
	</ul>
</nav>