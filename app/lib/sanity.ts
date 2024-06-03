import ImageUrlBuilder from '@sanity/image-url'
import { createClient } from 'next-sanity'

export const client = createClient({
    projectId: 'v4j7ztr4',
    dataset: 'production',
    apiVersion: '2024-05-14',
    useCdn: true,
})

const builder = ImageUrlBuilder(client)

export function urlFor(source: any) {
    return builder.image(source)
}