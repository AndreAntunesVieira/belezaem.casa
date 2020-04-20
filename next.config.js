require('dotenv').config()

module.exports = {
  exportTrailingSlash: true,
  env: {
    MONGODB_URL: process.env.MONGODB_URL,
  },
  serverless: true,
  exportPathMap: function () {
    return {
      '/': { page: '/' },
    }
  },
}
