export const prerender = false
export const trailingSlash = "always"
export const csr = true

// Detecteert en valideert taal uit de URL
import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

const query = gql`
    query HeaderData($locale: Locale!) {
        header(where: { id: "cmaioi0siow8k07mm9g2dy6yk" }, locales: [$locale]) {
            navItems {
                name
                slug
            }
            socials {
                name
                logo {
                    url
                }
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
