const { offlineFallback, warmStrategyCache } = require('workbox-recipes');
const { CacheFirst, NetworkOnly } = require('workbox-strategies');
const { registerRoute } = require('workbox-routing');
const { CacheableResponsePlugin } = require('workbox-cacheable-response');
const { ExpirationPlugin } = require('workbox-expiration');
const { precacheAndRoute } = require('workbox-precaching/precacheAndRoute');

precacheAndRoute(self.__WB_MANIFEST);

const pageCache = new CacheFirst({
  cacheName: 'page-cache',
  plugins: [
    new CacheableResponsePlugin({
      statuses: [0, 200],
    }),
    new ExpirationPlugin({
      maxAgeSeconds: 30 * 24 * 60 * 60,
    }),
  ],
});

warmStrategyCache({
  urls: ['/index.html', '/'],
  strategy: pageCache,
});

registerRoute(
  ({ request }) => request.mode === 'navigate', pageCache);

// TODO: Implement asset caching
registerRoute(
  ({ request }) =>
    request.destination === 'script' ||
    request.destination === 'image' ||
    request.destination === 'style',
  new CacheFirst({
    cacheName: 'asset-cache',
    plugins: [
      new CacheableResponsePlugin({
        statuses: [0, 200],
      }),
      new ExpirationPlugin({
        maxAgeSeconds: 30 * 24 * 60 * 60,
      }),
    ],
  })
);
registerRoute(
  offlineFallback(
    ({ request }) => request.destination === 'document',
    new NetworkOnly({
      cacheName: 'offline-cache',
      plugins: [
        new CacheableResponsePlugin({
          statuses: [0, 200],
        }),
        {
          cacheWillUpdate: async ({ response }) => {
            if (!response || response.status === 404) {
              const cache = await caches.open('offline-cache');
              const fallbackResponse = await cache.match('offline.html');
              if (fallbackResponse) {
                return fallbackResponse;
              }
            }
            return response;
          },
        },
      ],
    })
  )
);

