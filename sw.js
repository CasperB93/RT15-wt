const CACHE="rt15-amalfi-v3";
const CORE=[
  "./","./index.html","./home.jpg","./manifest.webmanifest",
  "./flight.jpg","./hotel.jpg","./music.jpg","./napoli.jpg",
  "./restaurant.jpg","./returnflight.jpg","./transfer.jpg",
  "./vesuv.jpg","./yacht-approved.png"
];
self.addEventListener("install",e=>e.waitUntil(
  caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())
));
self.addEventListener("activate",e=>e.waitUntil(
  caches.keys().then(keys=>Promise.all(
    keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))
  )).then(()=>self.clients.claim())
));
self.addEventListener("fetch",e=>{
  if(e.request.method!=="GET") return;
  e.respondWith(
    caches.match(e.request).then(r=>r||fetch(e.request).then(n=>{
      const c=n.clone();
      caches.open(CACHE).then(x=>x.put(e.request,c));
      return n;
    }))
  );
});
