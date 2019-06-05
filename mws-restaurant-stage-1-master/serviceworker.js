
self.addEventListener('install', event => {
    event.waitUntil(
      caches
        .open('mws-restaurant-stage-1-master')
        .then(cache =>
          cache.addAll([
            // 'css/style.css',
            // 'img/*.jpg',
            '/www/mws-restaurant-stage-1-master/data/restaurants.json',
            'https://api.mapbox.com/mapbox-gl-js/v0.54.0/mapbox-gl.js',
            '/www/mws-restaurant-stage-1-master/restaurant.html',
            '/www/mws-restaurant-stage-1-master/index.html',
            '/www/mws-restaurant-stage-1-master/css/styles.css',
            '/www/mws-restaurant-stage-1-master/data/restaurants.json',
            '/www/mws-restaurant-stage-1-master/img/1.jpg',
            '/www/mws-restaurant-stage-1-master/img/2.jpg',
            '/www/mws-restaurant-stage-1-master/img/3.jpg',
            '/www/mws-restaurant-stage-1-master/img/4.jpg',
            '/www/mws-restaurant-stage-1-master/img/5.jpg',
            '/www/mws-restaurant-stage-1-master/img/6.jpg',
            '/www/mws-restaurant-stage-1-master/img/7.jpg',
            '/www/mws-restaurant-stage-1-master/img/8.jpg',
            '/www/mws-restaurant-stage-1-master/img/9.jpg',
            '/www/mws-restaurant-stage-1-master/img/10.jpg',
            '/www/mws-restaurant-stage-1-master/js/dbhelper.js',
            '/www/mws-restaurant-stage-1-master/js/main.js',
            '/www/mws-restaurant-stage-1-master/js/restaurant_info.js',
            
          ])
        )
    )
  })
 
  self.addEventListener('activate', event => {
    event.waitUntil(
      caches.keys().then(keys => Promise.all(
        keys.map(key => {
          if (!expectedCaches.includes(key)) {
            return caches.delete(key);
          }
        })
      )).then(() => {
        console.log('ready to handle fetches!');
      })
    );
  });
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