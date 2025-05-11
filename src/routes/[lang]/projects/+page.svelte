<script>
    import { page } from '$app/state';
    let { data } = $props()
    let pages = data.data.page
    let { projects } = data.data

    console.log(page.url)
</script>

<main>
    <h1>{pages.title}</h1>
    <ul>
		{#each projects as project}
			<li>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <img src="{project.coverImage.url}" alt="{project.title}" width="100" height="100">
                <a href="{page.url.pathname}{project.slug}">{project.slug}</a>
            </li>
		{/each}
	</ul>
</main>