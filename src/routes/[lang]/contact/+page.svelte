<script>
    let { data } = $props()
    let { page } = data.data

    console.log(page.image[0].url)
</script>

<main>
    <section>
        <h1>{page.title}</h1>
        
    </section>
    <section>
        <img src="{page.image[0].url}" alt="" width="{page.image.width}" height="{page.image.height}">
        <p>{page.description}</p>
    </section>
</main>

<style>
    section {
        display: flex;
        flex-direction: column;
        gap: 2rem;
        padding: 2rem;
    }

    section:nth-of-type(2) {
        align-items: center;
        flex-direction: row;
    }
</style>