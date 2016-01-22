require('babel/polyfill');

const environment = {
  development: {
    isProduction: false
  },
  production: {
    isProduction: true
  }
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  opbeat: {
    organizationId: process.env.OPBEAT_ORG_ID,
    appId: process.env.OPBEAT_APPID,
    secretToken: process.env.OPBEAT_TOKEN
  },
  app: {
    title: 'Adriatic House',
    description: 'Looking for a perfect vacation? Stay at the Adriatic House and rest like never before!',
    meta: {
      charSet: 'utf-8',
      property: {
        'og:site_name': 'Adriatic House',
        'og:image': 'http://adriatic.house/images/pool.jpg',
        'og:locale': 'en_US',
        'og:title': 'Adriatic House',
        'og:description': 'Looking for a perfect vacation? Stay at the Adriatic House and rest like never before!',
        'twitter:card': 'summary'
      }
    }
  }
}, environment);
