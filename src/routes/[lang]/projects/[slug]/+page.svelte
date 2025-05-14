<script>
    let { data } = $props()
    let { project } = data.data
</script>

<main>
    <h2>{project.title}</h2>
    <small>{project.date}</small>
    <p>{project.description}</p>
    <p>{project.type}</p>
    <img src="{project.coverImage.url}" alt="{project.title}" width="100" height="100">
    <ul>
        {#each project.content as content}
            <li>
                <h3>{content.title}</h3>
                <p>{content.contentMarkdown}</p>
            </li>
        {/each}
    </ul>
</main>