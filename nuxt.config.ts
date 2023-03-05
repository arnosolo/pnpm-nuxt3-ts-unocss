// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
  ],
  runtimeConfig: {
    public: {
      HELLO: process.env.HELLO,
      NODE_ENV: process.env.NODE_ENV,
    },
  },
})
