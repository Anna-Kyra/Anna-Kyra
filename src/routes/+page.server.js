import { gql } from "graphql-request";
import { hygraph } from "$lib/utils/hygraph.js";

export async function load() {
    let query = gql`
        query Home {
            page(where: {id:"cmajm0gtovupa07mh4x7t6ggz"}) {
                title
                slug
                description
                content{
                    image {
                        url
                    }
                    video {
                        url
                    }
                    title
                    contentMarkdown
                }
                quote
                link {
                    linkTitle
                    url
                }
                image{
                    url
                }
                video{
                    url
                }
            }
        }
    `
    const data = await hygraph.request(query)

    return data
}