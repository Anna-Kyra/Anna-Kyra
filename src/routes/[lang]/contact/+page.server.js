import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

const query = gql`
    query Contact($locale: Locale!) {
        page(where: {id: "cmanp3f01ejxz07mh1883beaa"}, locales: [$locale]) {
            title
            slug
            description
            image {
                url
                width
                height
            }
            link {
                linkTitle
                url
            }
        }
    }
`
export async function load({ params }) {
    const localeMap = {
        nl: 'nl_NL',
        en: 'en'
    };

    const lang = params.lang || 'en'
    const locale = localeMap[lang] || 'en'

    const slug = params.slug

    const data = await hygraph.request(query, { slug, locale })

    return {
        data,
        locale
    };
}