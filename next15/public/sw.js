const CACHE_NAME = 'next15-pwa-v1';
const CACHE_URLS = [
  '/',
  '/favicon.ico',
  '/icon.png',
  '/profile.webp',
  '/manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(CACHE_URLS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) return caches.delete(key);
        })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  // only handle GET requests
  if (request.method !== 'GET') return;

  event.respondWith(
    caches.match(request).then((cached) => cached || fetch(request).then((resp) => {
      // put in cache
      return caches.open(CACHE_NAME).then((cache) => {
        try { cache.put(request, resp.clone()); } catch (e) {}
        return resp;
      });
    }).catch(() => cached))
  );
});
