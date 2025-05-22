<script>
    let { data } = $props()
    let { page } = data.data
    let { techStacks } = data.data


    console.log(page, techStacks)
</script>

<main>
    <section>
        <h1>{page.title}</h1>
    </section>
    <section>
        <img src="" alt="">
        <div>
            <h2>Anna-Kyra Strik</h2>
            <p>{page.description}</p>
        </div>
    </section>
    <section>
        <h2>Programma kennis</h2>
        <ul>
            {#each techStacks as techStack}
                <li>{techStack.name}</li>
            {/each}
        </ul>
    </section>
</main>

<style>
    section {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 2rem;
        align-items: center;
    }
    section:nth-of-type(2) {
        justify-content: center;
        flex-direction: row;
    }
</style>