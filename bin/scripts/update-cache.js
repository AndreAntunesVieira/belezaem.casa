const fs = require('fs')

const CACHE_NAME = 'belezaem.casa-' + new Date().getTime()
const pageUrls = ['/', '/agenda']
const staticAssets = ['/styles.css', '/logo-white-50.png', '/whatsapp.png', '/fotos/w65xrjq.jpg', '/fotos/boca.jpg']
const networkOnlyUrls = []
const networkOnlyUrlsRegex = [/www\.google-analytics\.com\/collect/, /www\.googletagmanager\.com\/gtag\/js/, /\/api\/schedules\/next/]
const networkThenCacheUrls = ['/api/testimonials']
const networkThenCacheUrlsRegex = []

const stringify = strs => JSON.stringify(strs)
const manyRegex = strs => '[' + strs.map(str => str.toString()).join(',') + ']'

let content = `
const CACHE_NAME = '${CACHE_NAME}'
const pageUrls = ${stringify(pageUrls)}
const staticAssets = ${stringify(staticAssets)}
const networkOnlyUrls = ${stringify(networkOnlyUrls)}
const networkOnlyUrlsRegex = ${manyRegex(networkOnlyUrlsRegex)}
const networkThenCacheUrls = ${stringify(networkThenCacheUrls)}
const networkThenCacheUrlsRegex = ${stringify(networkThenCacheUrlsRegex)}
`

content += fs.readFileSync('./bin/scripts/cache/sw-common.js', 'utf8')

fs.writeFileSync('./public/sw.js', content)
