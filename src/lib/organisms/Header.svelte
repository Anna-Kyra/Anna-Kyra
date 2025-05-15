<script>
	import Button from '$lib/atoms/Button.svelte'
	import Nav from '$lib/molecules/Nav.svelte'
	import NavItem from '$lib/atoms/NavItem.svelte'
	import getCurrentPage from '$lib/utils/getCurrentPage'

	import { page } from '$app/state'
	let { header = []} = $props()
	let { socials } = header

	const currentLang = $derived(page.params.lang || 'en')
	const currentPage = $derived(getCurrentPage(page.url.pathname, page.params.lang))

</script>

<header>
    <a href="/{currentLang}">
        <h1>insert logo</h1>
    </a>
	<ul>
		{#each socials as social (social)}
			<li><a target="_blank" href={social.url}>{social.name}</a></li>
		{/each}
	</ul>

    <Nav>
		<NavItem active={currentPage === 'projects'} href="/{currentLang}/projects">{header.navItems[0].name}</NavItem>
		<NavItem active={currentPage === 'about'} href="/{currentLang}/about">{header.navItems[1].name}</NavItem>
		<NavItem active={currentPage === 'contact'} href="/{currentLang}/contact">{header.navItems[2].name}</NavItem>
	</Nav>

	<a data-sveltekit-reload href="/{currentLang === 'en' ? 'nl' : 'en'}{currentPage ? `/${currentPage}` : ''}">
		{currentLang === 'nl' ? 'EN' : 'NL'}
	</a>
</header>