<script>
    import { page } from '$app/state';
    import Portret from "$lib/molecules/Portret.svelte"

    let { data } = $props()
    let pageData = data.data.page
    let { projects } = data.data

    console.log(pageData.content[0].title)
</script>

<main>
    <sections class="hero">
        <h1>{pageData.title}</h1>
        
        <Portret />
    </sections>
    <sections>
        <h2>{pageData.quote}</h2>
    </sections>
    <sections class="selected-work">
        <h2>{pageData.content[0].title}</h2>
        {#each projects as project}
			<li>
                <img src="{project.coverImage.url}" alt="{project.title}" width="{project.coverImage.width}" height="{project.coverImage.height}">
                <h2>{project.title}</h2>
                <time datetime="{project.date}">{project.date}</time>
                <p>{project.description}</p>
                <p>{project.type}</p>
                <a href="{page.url.pathname}projects/{project.slug}">Zie meer</a>
            </li>
		{/each}
    </sections>
</main>

<style>

</style>