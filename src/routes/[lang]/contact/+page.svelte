<script>
    let { data } = $props()
    let { page } = data.data

    console.log(page)
</script>

<main>
    <h1>{page.title}</h1>
    <p>{page.description}</p>
</main>