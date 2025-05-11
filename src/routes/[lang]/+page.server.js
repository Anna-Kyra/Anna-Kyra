// src/routes/[lang]/+page.server.js
import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

const query = gql`
	query Home($locale: Locale!) {
		page(where: { id: "cmajm0gtovupa07mh4x7t6ggz" }, locales: [$locale]) {
			title
			slug
			description
			content {
				image { url }
				video { url }
				title
				contentMarkdown
			}
			quote
			link {
				linkTitle
				url
			}
			image { url }
			video { url }
		}
	}
`;

export async function load({ params }) {
	const localeMap = {
		nl: 'nl_NL',
		en: 'en'
	};

	const lang = params.lang || 'en';
	const locale = localeMap[lang] || 'en';

	const data = await hygraph.request(query, { locale });

	return {
		data,
		locale
	};
}
