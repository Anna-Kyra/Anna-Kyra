<script>
    let { data } = $props()
    let { page } = data.data
    let { projects } = data.data
</script>

<main>
    <h1>{page.title}</h1>
    <ul>
		{#each projects as project}
			<li>
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <img src="{project.coverImage.url}" alt="{project.title}" width="100" height="100">
            </li>
		{/each}
	</ul>
</main>