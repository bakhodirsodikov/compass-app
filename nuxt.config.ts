import { defineNuxtModule } from 'nuxt'

export default defineNuxtConfig({
  modules: ['nuxt-swiper'],
  swiper: {

  },

  devtools: { enabled: false },

  app: {
    head: {
      title: 'compass-app',
      script: [
        {
          src: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js',
          tagPosition: 'bodyClose'
        }
      ]
    }
  },
  css: ['@/assets/styles/main.scss']
})
