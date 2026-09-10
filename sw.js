// Service Worker بسيط — دوره الوحيد تفعيل شرط "قابلية التثبيت" (Installability)
// لا يخزّن أي بيانات ولا يعمل أي تخزين مؤقت (Cache) — كل بيانات المنصة تبقى حيّة من الخادم مباشرة
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

// تمرير كل الطلبات مباشرة للشبكة بدون أي تعديل أو تخزين مؤقت
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
