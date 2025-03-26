import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
    collections: {
        blogs: defineCollection({
            type: 'page',
            source: 'blogs/*.md',

            schema: z.object({
                date: z.string()
            })
        }),

        changelogs: defineCollection({
            type: 'page',
            source: 'changelog/*.md',

            schema: z.object({
                title: z.string(),
                date: z.string()
            })
        })
    }
})
