export default function getCurrentPage(pathname, lang = 'en') {
	// Strip trailing slash
	const cleaned = pathname.replace(/\/$/, '');

	// Verwijder de taal prefix zoals `/en`, `/nl`, etc.
	const stripped = cleaned.replace(new RegExp(`^/${lang}`), '')

	switch (stripped) {
		case '':
			return ''
		case '/projects':
			return 'projects'
		case '/about':
			return 'about'
		case '/contact':
			return 'contact'
		default:
			return stripped.startsWith('/') ? stripped.slice(1) : stripped
	}
}
