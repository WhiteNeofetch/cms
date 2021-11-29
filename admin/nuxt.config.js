export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'mevn-dashboard',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  server: {
    host: process.env.NUXT_APP_HOST, // default: localhost
    port: process.env.NUXT_APP_PORT // default: 3000
  },

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/axiosport.js',
    '~/plugins/formGenerator.js',
    '~/plugins/vee-validate.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: ['@nuxtjs/tailwindcss'],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',

    '@nuxtjs/auth-next'
  ],



  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: process.env.NUXT_APP_BASE_URL
  },

  auth:{
    strategies:{
      local:{
        scheme: 'refresh',
        token: {
          property: 'accessToken',
          maxAge: 1800,
           type: 'Authorization'
        },
        refreshToken: {
          property: 'refreshToken',
          data: 'refreshToken',
          maxAge: 60 * 60 * 24 * 30
        },
        endpoints:{
          user:false,
          refresh:{
            url:'/auth/refresh',
            method:'post',
          },
          login:{
            url:'/auth/login',
            method:'post',
            propertyName:'accessToken'
          },
          logout:{
            url:'/auth/logout',
            method:'post',
          }
        }
      }
    }
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    transpile: ['vee-validate/dist/rules']
  }
}
