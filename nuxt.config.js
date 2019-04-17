const pkg = require('./package')


module.exports = {
  mode: 'spa',

  head: {
    title: 'BASH Festival of Code 2019',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { property: 'og:image', content: 'https://bashfestival.io/og.png' },
      { name: 'description', content: 'BASH Festival of Code is a free week-long coding festival for 13-17 year olds.' },
      { name: 'og:description', content: 'BASH Festival of Code is a free week-long coding festival for 13-17 year olds.' }
    ],
    script: [
      { src: '/hotjar.js' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'stylesheet', href: 'https://use.fontawesome.com/releases/v5.3.1/css/all.css', crossorigin: 'anonymous', integrity: 'sha384-mzrmE5qonljUremFsqc01SB46JvROS7bZs3IO2EmfFsd15uHvIt+Y8vEf7N7fWAU' },
      { rel: 'stylesheet', href: 'https://rsms.me/inter/inter-ui.css' }
    ]
  },

  loading: { color: '#fff' },

  css: [
    '~/assets/style.css'
  ],

  plugins: [
    '~/plugins/gmaps'
  ],

  modules: [
    '@nuxtjs/redirect-module'
  ],

  redirect: [
    { from: '^/sponsorship', to: '/support/sponsor' },
    { from: '^/hub-info', to: '/week/hubs' },
    { from: '^/hubs', to: '/week/hubs' }
  ],

  generate: {
    routes: [
      '/week/hubs/bristol',
      '/week/hubs/sheffield',
      '/week/hubs/liverpool',
      '/week/hubs/manchester',
      '/week/hubs/plymouth',
      '/week/hubs/southampton',
      '/week/hubs/london',
      '/week/hubs/birmingham',
      '/week/hubs/edinburgh',
      '/week/hubs/nottingham',
      '/week/hubs/newcastle',
      '/week/hubs/essex',
      '/week/hubs/peterborough'
    ]
  },

  build: {
    extend(config, ctx) {
      
    }
  }
}
