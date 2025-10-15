// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    modules: [
      '@vueuse/nuxt',
      "@nuxtjs/tailwindcss",
      '@nuxtjs/seo',
      '@nuxt/content',
      '@nuxt/fonts'
    ],

    devtools: {enabled: true},
    pages: true,
    css: ['~/assets/css/tailwind.css'],

    //fonts:
    // 'Jersey 10': true,
    // 'Micro 5': true,
    // 'Pixelify Sans': true,
    // 'Jacquard 12': true,
    // 'Geostar Fill': true,
    // 'Chokokutai': true,
    // 'JetBrains Mono': true

    fonts: {
        provider: 'bunny'
    },

    compatibilityDate: '2025-03-10'
})