<script>
    import { page } from '$app/state';
	let { footer = []} = $props();
    let { social } = footer
</script>

<footer>
    <h2>{footer.title}</h2>
	<ul>
		{#each social as social (social)}
			<li><a target="_blank" href="{social.url}">{social.name}</a></li>
		{/each}
	</ul>
    <p>{footer.copyright}</p>

    {footer.social[0].id}
</footer>