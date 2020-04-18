module.exports = {
  exportTrailingSlash: true,
  serverless: true,
  exportPathMap: function () {
    return {
      '/': { page: '/' },
    }
  },
}
