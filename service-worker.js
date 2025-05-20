
const CACHE_NAME = 'qr-kod-cache-v1';
const urlsToCache = [
  './',
  './index.html',
  './lib/qrcode.min.js',
  './lib/zxing.min.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
