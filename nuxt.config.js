const webpack = require('webpack');
module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'nuxtinit',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    script : [],
    link: [
      { rel : 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  css : ['assets/css/main.css','assets/css/reset.css','assets/css/bootstrap.min.css'],
  /*
  ** Build configuration
  */
  build: {
    vender : ['axios'],
    plugins : [
       new webpack.ProvidePlugin({
         jQuery : 'jquery',
         $ : 'jquery',
         'window.jQuery' : 'jquery'
       })
    ],
    loaders: [
      {
        test: /\.less$/,
        loader: "style-loader!css-loader!less-loader",
      }
    ],
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
