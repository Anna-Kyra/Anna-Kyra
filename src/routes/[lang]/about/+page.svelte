<script>
    let { data } = $props()
    let { page } = data.data
    let { techStacks } = data.data


    console.log(page, techStacks)
</script>

<main>
    <h1>{page.title}</h1>
    <p>{page.description}</p>
    <ul>
        {#each techStacks as techStack}
            <li>{techStack.name}</li>
        {/each}
    </ul>
</main>