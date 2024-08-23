// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  modules: ["@nuxt/ui", "@nuxt/content"],

  content: {
    documentDriven: true,
    markdown: {
      tags: {
        'h1': 'H1',
        'h2': 'H2',
        'h3': 'H3',
        'h4': 'H4',
        'p': 'Paragraph'
      }
    },
    highlight: {
      theme: {
        // Default theme (same as single string)
        default: 'github-light',
        // Theme used if `html.dark`
        dark: 'github-dark',
        // Theme used if `html.sepia`
        sepia: 'monokai'
      },
      // https://github.com/shikijs/shiki/blob/main/docs/languages.md#adding-grammar
      preload: ['java','json','js','ts','css','shell','html','md','yaml','sql','properties','http','groovy']
    },
  }
})