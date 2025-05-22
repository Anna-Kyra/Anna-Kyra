<script>
    import { page } from '$app/state';
    let { data } = $props()
    let pageData = data.data.page
    let { projects } = data.data
    let { projectSorts } = data.data

    console.log(projectSorts)
</script>

<main>
    <section>
        <h1>{pageData.title}</h1>
        <p>{pageData.description}</p>
        {#each projectSorts as projectSort}
            <ul>
                <li><button>{projectSort.type}</button></li>
            </ul>
        {/each}
    </section>
    <section class="filter">
        <h2>Filter</h2>
        {#each projectSorts as projectSort}
            <ul>
                <li><button>{projectSort.type}</button></li>
            </ul>
        {/each}
    </section>
    <section class="work">
        <ul>
            {#each projects as project}
                <li>
                    <h2>{project.title}</h2>
                    <p>{project.description}</p>
                    <img src="{project.coverImage.url}" alt="{project.title}" width="{project.coverImage.width}" height="{project.coverImage.height}">
                    <time datetime="{project.date}">{project.date}</time>
                    <p>{project.type}</p>
                    <a href="{page.url.pathname}{project.slug}">Zie meer</a>
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

    ul {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }

    li {
        display: flex;
        flex-direction: column;
    }

    img {
        width: 20rem;
        height: 20rem;
    }

    .filter {
        position: sticky;
        top: 6rem;
        display: flex;
        flex-direction: row;
        gap: 2rem;
    }
    
    .filter ul {
        flex-direction: row;
    }
</style>