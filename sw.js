const CACHE = 'mot-mystere-v1';
const FILES = [
  '/le-mot-mystere/',
  '/le-mot-mystere/index.html',
  '/le-mot-mystere/manifest.json',
  '/le-mot-mystere/icons/icon-192.png',
  '/le-mot-mystere/icons/icon-512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(r => r || fetch(e.request))
  );
});
