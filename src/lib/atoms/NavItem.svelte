<script>
	let { children, active = false, href = '' } = $props()
</script>

<li>
	{#if active}
		<h1>{@render children()}</h1>
	{:else if href}
		<a {href} class="focus-ring">{@render children()}</a>
	{:else}
		<span>{@render children()}</span>
	{/if}
</li>