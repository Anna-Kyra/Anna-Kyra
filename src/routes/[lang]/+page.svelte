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
                <h2>{project.title}</h2>
                <p>{project.description}</p>
                <img src="{project.coverImage.url}" alt="{project.title}" width="{project.coverImage.width}" height="{project.coverImage.height}">
                <a href="{page.url.pathname}{project.slug}">{project.title}</a>
            </li>
		{/each}
    </sections>
</main>

<style>

</style>