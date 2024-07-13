// https://nuxt.com/docs/api/configuration/nuxt-config
import vitePluginRequire from "vite-plugin-require";

export default defineNuxtConfig({
    modules: ['@nuxtjs/google-fonts', "@nuxt/image"],
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
            'Rubik Iso': true,
            'DotGothic16': true
        }
    }
})