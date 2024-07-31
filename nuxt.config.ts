// https://nuxt.com/docs/api/configuration/nuxt-config
import vitePluginRequire from "vite-plugin-require";

export default defineNuxtConfig({
    modules: ['@nuxtjs/google-fonts', '@nuxt/image', '@vueuse/nuxt'],
    devtools: {enabled: true},
    pages: true,
    ssr: false,

    vite: {
        plugins: [
            vitePluginRequire()
        ]
    },

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