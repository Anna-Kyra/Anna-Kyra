export const prerender = false
export const trailingSlash = "always"
export const csr = true

// Detecteert en valideert taal uit de URL
export function load({ params }) {
	const lang = params.lang;
	const supported = ['en', 'nl'];
	const defaultLang = 'en';

	if (!supported.includes(lang)) {
		// Redirect naar standaardtaal als onbekend
		throw redirect(307, `/${defaultLang}`);
	}

	return {
		lang
	};
}
