
self.addEventListener('install', event => {
    event.waitUntil(
      caches
        .open('mws-restaurant-stage-1-master')
        .then(cache =>
          cache.addAll([
            'http://localhost:${port}/www/data/restaurants.json',
            'css/style.css',
            'img/*.jpg',
            'https://api.mapbox.com/mapbox-gl-js/v0.54.0/mapbox-gl.js'
          ])
        )
    )
  })
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        if (response) {
          
          return response
        }
        return fetch(event.request)
      })
    )
  })
