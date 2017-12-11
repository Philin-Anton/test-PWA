'use strict';
importScripts('workbox-sw.prod.js');
// Create Workbox service worker instance
const workboxSW = new WorkboxSW({ clientsClaim: true });


const fileManifest = [
    {
      "url": "index.html",
      "revision": "ff1ced354b20403354b58d9325625e88"
    },
    {
      "url": "style/style.css",
      "revision": "ad825ed0cc4923f3231f646462c9fbd9"
    }
  ];

// Placeholder array which is populated automatically by workboxBuild.injectManifest()
workboxSW.precache([]);

workboxSW.router.registerRoute('/*', workboxSW.strategies.networkFirst());
// Register png files e.g. https://localhost:3000/images/1.png
workboxSW.router.registerRoute('/images/*', workboxSW.strategies.networkFirst());

// Register example path e.g. https://localhost:3000/example
workboxSW.router.registerRoute('/example', workboxSW.strategies.staleWhileRevalidate());

// Register express like route paths e.g. https://localhost:3000/list/one
workboxSW.router.registerRoute('/list/:itemId',
  workboxSW.strategies.staleWhileRevalidate({
    cacheName: 'cache-with-expiration',
    cacheExpiration: {
      maxEntries: 20,
      maxAgeSeconds: 120
    }
  })
);

// toolbox.precache(['index.html','style/style.css']);
// toolbox.router.get('/images/*', toolbox.cacheFirst);
// toolbox.router.get('/*', toolbox.networkFirst, { networkTimeoutSeconds: 5});