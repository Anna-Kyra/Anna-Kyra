// src/routes/[lang]/+page.server.js
import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

const query = gql`
    query Projects($locale: Locale!) {
        page(where: {id: "cmak43mydz90907mod4xa0axg"}, locales: [$locale]) {
            title
            slug
            description
        }
        projects {
            coverImage {
                url
            }
            date
            slug
            title
            description
            siteLink {
                url
                linkTitle
            }
            type
            techStack {
                logo {
                    url
                }
                name
                type
            }
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
