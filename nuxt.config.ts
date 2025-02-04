// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    modules: [
        '@nuxtjs/google-fonts',
        '@vueuse/nuxt',
        "@nuxtjs/tailwindcss",
        '@nuxt/content',
        '@nuxtjs/seo'
    ],
    devtools: {enabled: true},
    pages: true,
    css: ['~/assets/css/tailwind.css'],

    // tailwindcss: {
    //     cssPath: '~/assets/css/tailwind.css',
    // },

    googleFonts: {
        families: {
            'Jersey 10': true,
            'Micro 5': true,
            'Pixelify Sans': true,
            'Jacquard 12': true,
            'Geostar Fill': true,
            'Chokokutai': true,
            'JetBrains Mono': true
        }
    },

    compatibilityDate: '2024-07-31'
})