'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "1f561285710140b069b8537ad5be83d3",
"assets/assets/images/no_photo_user.png": "ce14d64d9212c455e4495252453d3d59",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "304cd3eb7f059996871326d3169b91e1",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "1e306f083913ea7909e74bcdaf7baf57",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/job_192.png": "c73da216e6d09b027da50956feed3140",
"icons/job_512.png": "af5ea36637c5381cded837492ef9b542",
"index.html": "6ebe8be9543012680b28e7e68bab1d37",
"/": "6ebe8be9543012680b28e7e68bab1d37",
"main.dart.js": "77f286016cafebdf2904314b2c62fff9",
"manifest.json": "25a2647b789d138087684a82be01191f"
};

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (cacheName) {
      return caches.delete(cacheName);
    }).then(function (_) {
      return caches.open(CACHE_NAME);
    }).then(function (cache) {
      return cache.addAll(Object.keys(RESOURCES));
    })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
