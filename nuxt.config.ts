// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/google-fonts'],
    devtools: {enabled: true},
    pages: true,
    ssr: false,

    googleFonts: {
        families: {
            'Jersey 10': true,
            'Micro 5': true,
            'Rubik Iso': true
        }
    }
})
