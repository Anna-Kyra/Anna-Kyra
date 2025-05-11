<script>
    import Header from "$lib/organisms/Header.svelte"
    import Footer from "$lib/organisms/Footer.svelte"

    import { javascript } from "$lib/utils/javascriptEnabled.svelte.js"
    import { locale } from 'svelte-i18n'
    import { onMount } from "svelte"

    let { data, children } = $props()
    let { header } = data.data
    let { footer } = data.data

    onMount(() => {
        // Check if JavaScript is enabled
        if (typeof window !== 'undefined' && typeof window.document !== 'undefined') {
            javascript.enabled = true
        }
    })

	$effect(() => {
		const lang = data.lang

		locale.set(lang)                      // Zet taal voor svelte-i18n
		document.documentElement.lang = lang  // Zet <html lang="...">
	});
    
    // console.log(footer)
</script>

<svelte:head>
    <title>Anna-Kyra Strik | Portfolio</title>
    <meta name="description" content="Anna-Kyra Strik portfolio." />
</svelte:head>

<Header {header} />
{header.navItems[0].name}
{@render children()}

<Footer {footer} />