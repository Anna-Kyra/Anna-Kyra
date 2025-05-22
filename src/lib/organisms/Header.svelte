<script>
	import Button from '$lib/atoms/Button.svelte';
	import Nav from '$lib/molecules/Nav.svelte';
	import NavItem from '$lib/atoms/NavItem.svelte';
	import getCurrentPage from '$lib/utils/getCurrentPage';

	import { page } from '$app/state';
	let { header = []} = $props();
	let { socials } = header

	const currentLang = $derived(page.params.lang || 'en');
	const currentPage = $derived(getCurrentPage(page.url.pathname, page.params.lang));

</script>

<header>
	<ul>
		<li>
			<a href="/{currentLang}">
				<h1>insert logo</h1>
			</a>
		</li>
		{#each socials as social (social)}
			<li><a target="_blank" href={social.url}>{social.name}</a></li>
		{/each}
	</ul>

    <Nav>
		<NavItem active={currentPage === 'projects'} href="/{currentLang}/projects">{header.navItems[0].name}</NavItem>
		<NavItem active={currentPage === 'about'} href="/{currentLang}/about">{header.navItems[1].name}</NavItem>
		<NavItem active={currentPage === 'contact'} href="/{currentLang}/contact">{header.navItems[2].name}</NavItem>
		<a data-sveltekit-reload href="/{currentLang === 'en' ? 'nl' : 'en'}{currentPage ? `/${currentPage}` : ''}">
			{currentLang === 'nl' ? 'EN' : 'NL'}
		</a>
	</Nav>

</header>

<style>
	header {
		position: sticky;
		top: 0;
		z-index: 999;

		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 2rem;
		background-color: goldenrod;
	}

	ul {
		display: flex;
		gap: 1rem;
		list-style: none;
		align-items: center;
	}
</style>