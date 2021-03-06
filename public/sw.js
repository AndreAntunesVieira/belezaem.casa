
const CACHE_NAME = 'belezaem.casa-1614943924214'
const pageUrls = []
const staticAssets = []
const networkOnlyUrls = []
const networkOnlyUrlsRegex = []
const networkThenCacheUrls = []
const networkThenCacheUrlsRegex = []
const SW_SUPPORTED_PROTOCOL_REGEX = /http(s?):/

function preCacheResources() {
  return caches.open(CACHE_NAME).then(function (cache) {
    cache.addAll(pageUrls) // Pre-cache all static assets by keeping them as installation dependency
    return cache.addAll(staticAssets)
  })
}

self.addEventListener('install', function (event) {
  self.skipWaiting()
  event.waitUntil(
    preCacheResources().catch(function (installErr) {
      console.log('sw: precaching failed with: ', installErr)
    })
  )
})

function clearOldCache() {
  return caches.keys().then(function (keys) {
    return Promise.all(
      keys
        .filter(function (key) {
          return key !== CACHE_NAME
        })
        .map(function (key) {
          return caches.delete(key)
        })
    )
  })
}

self.addEventListener('activate', function (event) {
  event.waitUntil(
    clearOldCache().then(function () {
      clients.claim() // eslint-disable-line no-undef
    })
  )
})

function isPageRequest(url) {
  return url.origin === location.origin && pageUrls.includes(url.pathname)
}

function isNetworkOnlyRequest(url, requestMethod) {
  if (requestMethod !== 'GET' || !SW_SUPPORTED_PROTOCOL_REGEX.test(url.protocol)) return true

  const urlOrigin = url.origin
  const urlPathName = url.pathname
  const fullUrl = `${urlOrigin}${urlPathName}`

  if (networkOnlyUrls.includes(urlOrigin) || networkOnlyUrls.includes(fullUrl)) return true
  return networkOnlyUrlsRegex.some(regex => regex.test(fullUrl))
}

function isNetworkThenCacheRequest(url, requestMethod) {
  if (requestMethod !== 'GET' || !SW_SUPPORTED_PROTOCOL_REGEX.test(url.protocol)) return true

  const urlOrigin = url.origin
  const urlPathName = url.pathname
  const fullUrl = `${urlOrigin}${urlPathName}`

  if (networkThenCacheUrls.includes(urlOrigin) || networkThenCacheUrls.includes(fullUrl)) return true
  return networkThenCacheUrlsRegex.some(regex => regex.test(fullUrl))
}

function handleWithNetworkThenCache(event) {
  return event.respondWith(
    fetch(event.request)
      .then(function (networkResponse) {
        return caches.open(CACHE_NAME).then(function (cache) {
          cache.put(event.request, networkResponse.clone())
          return networkResponse
        })
      })
      .catch(() => caches.match(event.request))
  )
}

function handleWithCacheThenNetwork(event) {
  return event.respondWith(
    caches
      .open(CACHE_NAME)
      .then(function (cache) {
        return cache.match(event.request).then(function (response) {
          return (
            response ||
            fetch(event.request).then(function (networkResponse) {
              cache.put(event.request, networkResponse.clone())
              return networkResponse
            })
          )
        })
      })
      .catch(err => err)
  )
}

function handleWithNetwork(event) {
  return event.respondWith(fetch(event.request))
}

function handleRequests(event) {
  const requestURL = new URL(event.request.url)

  if (isNetworkOnlyRequest(requestURL, event.request.method)) return handleWithNetwork(event)

  if (isPageRequest(requestURL) || isNetworkThenCacheRequest(requestURL, event.request.method)) {
    return handleWithNetworkThenCache(event)
  }

  return handleWithCacheThenNetwork(event)
}

self.addEventListener('fetch', handleRequests)
