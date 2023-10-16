// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  nitro: { preset: 'firebase', firebase: { nodeVersion: "18", gen: 2, httpsOptions: { region: 'us-central1', maxInstances: 50, }, }, },
})
