// eslint-disable-next-line no-var
declare var self: ServiceWorkerGlobalScope;

self.addEventListener('install', () => {
  console.log('install 2');
});

console.log('123');

self.addEventListener("fetch", (event) => {
  console.log(event);
  return event.respondWith(fetch(event.request));
});

export default null