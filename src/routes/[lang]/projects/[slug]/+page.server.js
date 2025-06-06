import { gql } from 'graphql-request';
import { hygraph } from '$lib/utils/hygraph.js';

const query = gql`
    query Project($slug: String!, $locale: Locale!) {
        project(where: {slug: $slug}, locales: [$locale]) {
            title
            slug
            date
            description
            siteLink {
                linkTitle
                url
            }
            type
            techStack {
                name
                type
                logo {
                    url
                    width
                    height
                }
            }
            coverImage {
                url
                width
                height
            }
            content {
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
                title
                contentMarkdown
            }
            image {
                url
            }
            video {
                url
            }
        }
    }
`;

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