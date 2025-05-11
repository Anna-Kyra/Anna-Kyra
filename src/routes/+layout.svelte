<script>
    import Header from "$lib/organisms/Header.svelte"
    import Footer from "$lib/organisms/Footer.svelte"

    import { javascript } from "$lib/utils/javascriptEnabled.svelte.js"
    import { onMount } from "svelte"

    let { children } = $props();

    onMount(() => {
        // Check if JavaScript is enabled
        if (typeof window !== 'undefined' && typeof window.document !== 'undefined') {
        javascript.enabled = true;
        }
    });
</script>

<svelte:head>
    <title>Anna-Kyra Strik | Portfolio</title>
    <meta name="description" content="Anna-Kyra Strik portfolio." />
</svelte:head>

<Header />

{@render children()}

<Footer />