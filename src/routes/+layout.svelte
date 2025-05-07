<script>
    import Header from "$lib/organisms/Header.svelte"
    import Footer from "$lib/organisms/Footer.svelte"

    let { children } = $props();
</script>

<svelte:head>
    <title>Anna-Kyra Strik | Portfolio</title>
    <meta name="description" content="Anna-Kyra Strik portfolio." />
</svelte:head>

<Header />

{@render children()}

<Footer />