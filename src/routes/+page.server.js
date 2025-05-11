import { redirect } from '@sveltejs/kit';

export function load({ request }) {
	const acceptLang = request.headers.get('accept-language') || '';
	const isDutch = acceptLang.includes('nl');
	throw redirect(307, isDutch ? '/nl' : '/en');
}