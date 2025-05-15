<script>
	let { children, active = false, href = '' } = $props()
</script>

<li>
	{#if active}
		<h2>{@render children()}</h2>
	{:else if href}
		<a {href} class="focus-ring">{@render children()}</a>
	{:else}
		<span>{@render children()}</span>
	{/if}
</li>