// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    modules: ['@nuxtjs/google-fonts', '@nuxt/image', '@vueuse/nuxt'],
    devtools: {enabled: true},
    pages: true,
    ssr: false,

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
    }
})