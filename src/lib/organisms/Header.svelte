<script>
	import Button from '$lib/atoms/Button.svelte';
	import Nav from '$lib/molecules/Nav.svelte';
	import NavItem from '$lib/atoms/NavItem.svelte';
	import getCurrentPage from '$lib/utils/getCurrentPage';

	import { page } from '$app/state';
	let { header = []} = $props();

	const currentLang = $derived(page.params.lang || 'en');
	const currentPage = $derived(getCurrentPage(page.url.pathname, page.params.lang));

</script>

<header>
    <a href="/{currentLang}">
        <h1>insert logo</h1>
    </a>

    <Nav>
		<NavItem active={currentPage === 'projects'} href="/{currentLang}/projects">{header.navItems[0].name}</NavItem>
		<NavItem active={currentPage === 'about'} href="/{currentLang}/about">{header.navItems[1].name}</NavItem>
		<NavItem active={currentPage === 'contact'} href="/{currentLang}/contact">{header.navItems[2].name}</NavItem>
	</Nav>

	<a href="/{currentLang === 'en' ? 'nl' : 'en'}/{currentPage}">
		{currentLang === 'nl' ? 'EN' : 'NL'}
	</a>
	

</header>