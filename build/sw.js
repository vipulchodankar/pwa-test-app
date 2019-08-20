importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

//custom adjustments
workbox.routing.registerRoute(
    new RegExp('https://jsonplaceholder.typicode.com/users'),
    workbox.strategies.cacheFirst()
);

workbox.precaching.precacheAndRoute([
  {
    "url": "css/app.css",
    "revision": "1552439d82dd61eba6bd15fec5cb2a31"
  },
  {
    "url": "index.html",
    "revision": "efe86dde32e18263f000495865a872c9"
  },
  {
    "url": "js/app.js",
    "revision": "decf814bfb34e0e9530b310057359b2a"
  }
]);