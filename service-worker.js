!function(){"use strict";const e=["client/_sidebar.90ed2751.js","client/_accordion.94aeaeb4.js","client/index.aca0df99.js","client/_config.c880ad1e.js","client/about.4c8594c1.js","client/share.f0b61ad2.js","client/index.3677ff30.js","client/404.ee695986.js","client/500.1a596974.js","client/client.6ebf45b2.js","client/[slug].967f11d3.js"].concat(["service-worker-index.html","extra.css","favicon.ico","global.css","manifest.json"]),t=new Set(e);self.addEventListener("install",t=>{t.waitUntil(caches.open("cache1580268513974").then(t=>t.addAll(e)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const t of e)"cache1580268513974"!==t&&await caches.delete(t);self.clients.claim()}))}),self.addEventListener("fetch",e=>{if("GET"!==e.request.method||e.request.headers.has("range"))return;const s=new URL(e.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&t.has(s.pathname)?e.respondWith(caches.match(e.request)):"only-if-cached"!==e.request.cache&&e.respondWith(caches.open("offline1580268513974").then(async t=>{try{const s=await fetch(e.request);return t.put(e.request,s.clone()),s}catch(s){const n=await t.match(e.request);if(n)return n;throw s}}))))})}();
