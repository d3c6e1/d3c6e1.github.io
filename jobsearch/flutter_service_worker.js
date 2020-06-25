'use strict';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "d11234f54fd09d793fbe69ed8f5db928",
"assets/assets/images/logout.png": "9410d480ab7d8be27bf4fffd5a8ab8ed",
"assets/assets/images/my_documents.png": "e01d5e8a5ab7426726664d485e4adfc5",
"assets/assets/images/my_resumes.png": "a04df349207e58ccd065b8b8d4c960c3",
"assets/assets/images/no_photo_user.png": "ce14d64d9212c455e4495252453d3d59",
"assets/assets/images/organization.png": "0fc7b09aa3b97d70d8c01e8562ff07ac",
"assets/FontManifest.json": "01700ba55b08a6141f33e168c4a6c22f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/LICENSE": "5fd5cee3114750043d6b2a7fe62c41c4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "1e306f083913ea7909e74bcdaf7baf57",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/job_192.png": "c73da216e6d09b027da50956feed3140",
"icons/job_512.png": "af5ea36637c5381cded837492ef9b542",
"index.html": "2f342631bd2d70df5d5c618fdbe1be0f",
"/": "2f342631bd2d70df5d5c618fdbe1be0f",
"main.dart.js": "2c08f766760c2d5c581f5028307aed38",
"manifest.json": "25a2647b789d138087684a82be01191f",
"toFile.js": "ede6cd62ecde2f6682766c0570e7b6e9"
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
