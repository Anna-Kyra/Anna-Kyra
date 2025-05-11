<script>
    import Portret from "$lib/molecules/Portret.svelte"

    let { data } = $props()
    let { page } = data
</script>

<main>
    <section class="hero">
        <h2>hier kom ik te staan</h2>
        <!-- <Portret /> -->
    </section>
    <section>
        <h2>"Insert quote"</h2>
    </section>
    <section class="selected-work">
        <h2>Selected work</h2>
        <ul>
            <li>
                <article>
                    <h3>Title</h3>
                    <time datetime="03-01-25">03-04-25</time>
                    <p>* insert description *</p>
                </article>
            </li>
        </ul>
    </section>
</main>


<style>

</style>