<script>
    import { page } from '$app/state';
	let { footer = []} = $props();
    let { social } = footer

    console.log(footer.social)
</script>

<footer>
    <h2>{footer.title}</h2>
    {#each social as social (social)}
        <a href={social.url}>{social.name}</a>
        <br>
    {/each}
    <p>{footer.copyright}</p>

    {footer.social[0].id}
</footer>