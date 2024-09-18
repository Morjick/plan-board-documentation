// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  css: ['~/assets/styles/main.scss'],
  modules: ['vuetify-nuxt-module', 'nuxt-icons'],
  vuetify: {},
  ssr: false,
  runtimeConfig: {
    public: {
      baseURL: 'http://192.168.1.79'
    }
  }
})