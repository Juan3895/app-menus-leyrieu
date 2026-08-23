// sw.js
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', (event) => {
  // Ignorer les requêtes non-GET (comme les POST/PUT/DELETE de Supabase) pour éviter les erreurs
  if (event.request.method !== 'GET') {
    return;
  }

  event.respondWith(
    fetch(event.request)
      .catch(() => {
        return caches.match(event.request).then((cachedResponse) => {
          // Si on trouve dans le cache, on le renvoie, sinon on renvoie une réponse vide propre au lieu de undefined
          return cachedResponse || new Response("Hors ligne", { status: 503, statusText: "Service Unavailable" });
        });
      })
  );
});