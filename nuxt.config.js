export default {
  target: 'static',
  components: {
    dirs: [
      '~/components',
      {
        path: '~/components/',
      },
    ],
  },
  router: {
    base: '/',
  },
  server: {
    port: 8000,
  },
  head: {
    title: 'SPORT CLUB SOCHI',
    titleTemplate: 'спортивный слуб Сочи | %s',
    htmlAttrs: {
      lang: 'ru',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  css: [
    { src: '~assets/style/style.scss', lang: 'scss' },
  ],

  plugins: [
    '~/plugins/vue-lazysizes.client.js',
    '~/plugins/fontawesome.js',
  ],

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/google-fonts',
  ],

  modules: [
    '@nuxtjs/axios',
    '@aceforth/nuxt-optimized-images',
  ],

  build: {
    parallel: false,
    extend(config, { loaders: { vue } }) {
      vue.transformAssetUrls.img = ['data-src', 'src']; // eslint-disable-line no-param-reassign
      vue.transformAssetUrls.source = ['data-srcset', 'srcset']; // eslint-disable-line no-param-reassign
    },
  },
  responsiveLoader: {
    name: 'img/[hash:7]-[width].[ext]',
    quality: 50,
  },
  optimizedImages: {
    inlineImageLimit: 1000,
    handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif'],
    optimizeImages: false,
    optimizeImagesInDev: false,
    defaultImageLoader: 'img-loader',
    mozjpeg: {
      quality: 80,
    },
    webp: {
      preset: 'default',
      quality: 80,
    },
  },
  googleFonts: {
    families: {
      Jost: true,
      Roboto: true,
    },
  },
};
