<script>
    import { page } from '$app/state';
	let { footer = []} = $props();
    let { social } = footer
</script>

<footer>
    <h2>{footer.title}</h2>

	<section>
		<!-- Navigatie -->
		<article>
			<h3>Navigation</h3>
			<ul></ul>
		</article>

		<!-- Contact -->
		<article>
			<h3>Contact</h3>
			<ul></ul>
		</article>

		<!-- Socials -->
		<article>
			<h3>Socials</h3>
			<ul>
				{#each social as social (social)}
					<li><a target="_blank" href="{social.url}">{social.name}</a></li>
				{/each}
			</ul>
		</article>

		<!-- EYE -->
	</section>

    <p>{footer.copyright}</p>

    {footer.social[0].id}
</footer>

<style>
	footer {
		display: flex;
		flex-direction: column;
		padding: 2rem;
		background-color: goldenrod;
	}

	section {
		display: flex;
		gap: 1rem;
		justify-content: space-between;
	}

	ul {
		list-style: none;
	}
</style>