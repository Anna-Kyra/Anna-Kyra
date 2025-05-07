<script>
	import Button from '$lib/atoms/Button.svelte';
	import Nav from '$lib/molecules/Nav.svelte';
	import NavItem from '$lib/atoms/NavItem.svelte';
	import getCurrentPage from '$lib/utils/getCurrentPage';

	import { page } from '$app/state';

	let currentPage = $derived(getCurrentPage(page.url.pathname));		
    console.log(getCurrentPage)
</script>

<header>
    <a href="/">
        <h1>insert logo</h1>
    </a>

    <Nav>
		<NavItem active={currentPage === 'projects'} href="/">Projects</NavItem>
		<NavItem active={currentPage === 'about'} href="/about">About</NavItem>
		<NavItem active={currentPage === 'contact'} href="/contact">Contact</NavItem>
	</Nav>
</header>