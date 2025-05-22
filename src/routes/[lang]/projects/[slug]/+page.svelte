<script>
    let { data } = $props()
    let { project } = data.data
</script>

<main>
    <section>
        <img src="{project.coverImage.url}" alt="{project.title}" width="100" height="100">
        <article>
            <h2>{project.title}</h2>
            <small>{project.date}</small>
            <p>{project.description}</p>
            <p>{project.type}</p>
            <button>Read more</button>
        </article>
    </section>
    <section class="content">
        <ul>
            {#each project.content as content}
                <li>
                    <h3>{content.title}</h3>
                    <p>{content.contentMarkdown}</p>
                </li>
            {/each}
        </ul>
    </section>
</main>

<style>
    section {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;

        padding: 2rem;
        background-color: hotpink;
    }

    section:nth-of-type(1) {
        flex-direction: row;
        justify-content: space-around;
        min-height: 50vh;
    }
</style>