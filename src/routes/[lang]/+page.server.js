import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

const query = gql`
	query Home($locale: Locale!) {
		page(where: { id: "cmajm0gtovupa07mh4x7t6ggz" }, locales: [$locale]) {
			title
			slug
			description
			content {
				image { 
					url
					width
					height
				}
				video { 
					url
					size 
				}
				title
				contentMarkdown
			}
			quote
			link {
				linkTitle
				url
			}
			image { 
				url
				width
				height 
			}
			video { 
				url
				width
				height 
			}
		}
		projects(
			where: {selected: true}
			locales: [$locale]
		) {
			title
			slug
			coverImage {
				url
				width
				height
			}
			date
			description
			type
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
