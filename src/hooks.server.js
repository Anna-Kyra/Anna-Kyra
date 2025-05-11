// Geen 404 status error meer in de console
export async function handle({ event, resolve }) {
	if (event.url.pathname.startsWith('/.well-known')) {
		return new Response('Not Found', { status: 404 });
	}
	return resolve(event);
}
