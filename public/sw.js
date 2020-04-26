'use strict'

const CACHE_NAME = 'belezaem.casa-1587185972863'
const SW_SUPPORTED_PROTOCOL_REGEX = /http(s?):/
const pageUrls = JSON.parse('["/"]')
const staticAssets = JSON.parse('["/styles.css"]')
const networkOnlyUrls = JSON.parse('["https://www.google-analytics.com/collect"]')
const networkOnlyUrlsRegex = JSON.parse('[]').map(regexString => new RegExp(regexString))
const networkThenCacheUrls = JSON.parse('[]')
const networkThenCacheUrlsRegex = JSON.parse('[]').map(regexString => new RegExp(regexString))

function preCacheResources() {
  return caches.open(CACHE_NAME).then(function (cache) {
    // Pre-Cache pages to improve subsequent navigation but don't making it blocking
    // Avoid extremely large websites from using the end-users data in unexpected amount
    cache.addAll(pageUrls) // Pre-cache all static assets by keeping them as installation dependency

    return cache.addAll(staticAssets)
  })
}

self.addEventListener('install', function (event) {
  // Let the new worker take over as fast as possible
  // For quirks refer: https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle#skip_the_waiting_phase
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
  // Remember to keep this step as lean as possible
  // Only sutiable for performing stuff that can't be done while the previous worker is running
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
  // Browser extensions don't use the standard `http` and `https` protocols
  // Refer: https://github.com/GoogleChromeLabs/sw-toolbox/issues/171
  if (requestMethod !== 'GET' || !SW_SUPPORTED_PROTOCOL_REGEX.test(url.protocol)) {
    return true
  }

  const urlOrigin = url.origin
  const urlPathName = url.pathname
  const fullUrl = `${urlOrigin}${urlPathName}`

  if (networkOnlyUrls.includes(urlOrigin) || networkOnlyUrls.includes(fullUrl)) {
    return true
  }

  if (networkOnlyUrlsRegex.some(regex => regex.test(fullUrl))) {
    return true
  }

  return false
}

function isNetworkThenCacheRequest(url, requestMethod) {
  // Browser extensions don't use the standard `http` and `https` protocols
  // Refer: https://github.com/GoogleChromeLabs/sw-toolbox/issues/171
  if (requestMethod !== 'GET' || !SW_SUPPORTED_PROTOCOL_REGEX.test(url.protocol)) {
    return true
  }

  const urlOrigin = url.origin
  const urlPathName = url.pathname
  const fullUrl = `${urlOrigin}${urlPathName}`

  if (networkThenCacheUrls.includes(urlOrigin) || networkThenCacheUrls.includes(fullUrl)) {
    return true
  }

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
      .catch(function () {
        // network failed, try to serve a cached response or offline page if there is one
        return caches.match(event.request)
      })
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
      .catch(function (err) {
        // TODO: respond with `offline.html` as the final fallback for page requests
        // and use appropriate response for other cases
        return err
      })
  )
}

function handleWithNetwork(event) {
  return event.respondWith(fetch(event.request))
}

function handleRequests(event) {
  const requestURL = new URL(event.request.url)

  if (isNetworkOnlyRequest(requestURL, event.request.method)) {
    return handleWithNetwork(event)
  }

  if (isPageRequest(requestURL) || isNetworkThenCacheRequest(requestURL, event.request.method)) {
    // To avoid serving stale content after a publish
    // always fetch the markup from origin and use cache only when the user is offline
    return handleWithNetworkThenCache(event)
  }

  return handleWithCacheThenNetwork(event)
}

self.addEventListener('fetch', handleRequests)
