// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'shadcn-nuxt'],
  css: ['~/assets/css/tailwind.css'],
  shadcn: {
    prefix: '',
    componentDir: './app/components/ui'
  },
  app: {
    head: {
      title: 'Grading Hub - Lightroom Presets',
      link: [
        { rel: 'icon', type: 'image/png', href: '/logo.png' }
      ]
    }
  }
})