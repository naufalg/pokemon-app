let cacheData = "appV1";

const cachedAssets = [
  "./static/js/main.chunk.js",
  "./static/js/0.chunk.js",
  "./static/js/bundle.js",
  "./index.html",
  "./",
  "./my-pokemon",
  "./pokeball.png",
  "./static/media/pokeball-wallpaper.d199e2cf.jpg",
];

// install sw
this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      return cache.addAll(cachedAssets);
    })
  );
});

// fetch sw
this.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // return fetch(event.request);
      // .catch(() => catches.match("index.html"));
      if (response) {
        return response;
      }
      // else {
      //   return fetch(event.request)
      //     .then((resp) => {
      //       return caches.open(CACHE_DYNAMIC_NAME).then((cache) => {
      //         cache.put(event.request.url, resp.clone());
      //         return resp;
      //       });
      //     })
      //     .catch((err) => {
      //       return caches
      //         .open(CACHE_CONTAINING_ERROR_MESSAGES)
      //         .then((cache) => {
      //           return cache.match("/offline.html");
      //         });
      //     });
      // }
    })
  );
});

// activate sw
this.addEventListener("activate", (event) => {
  const cacheWhitelist = [];
  cacheWhitelist.push(cacheData);
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});
